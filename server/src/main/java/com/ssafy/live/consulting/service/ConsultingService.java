package com.ssafy.live.consulting.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.ConsultingStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest.ChangeStatus;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationRealtor;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationUser;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.consulting.domain.entity.ConsultingItem;
import com.ssafy.live.consulting.domain.repository.ConsultingItemRepository;
import com.ssafy.live.consulting.domain.repository.ConsultingRepository;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.repository.ItemRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConsultingService {

    private final Response response;
    private final ConsultingRepository consultingRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ItemRepository itemRepository;
    private final ConsultingItemRepository consultingItemRepository;
    
    public ResponseEntity<?> reserve(ConsultingRequest.Reserve reserve) {
        Users users = usersRepository.findByNo(reserve.getUserNo());
        Realtor realtor = realtorRepository.findByNo(reserve.getRealtorNo());
        List<Item> list = reserve.getItemList().stream()
                .map(r -> itemRepository.findByNo(r))
                .collect(Collectors.toList());

        Consulting consulting = Consulting.builder()
                .realtor(realtor)
                .users(users)
                .consultingDate(reserve.getConsultingDate())
                .requirement(reserve.getRequirement())
                .status(ConsultingStatus.RESERVERVATION_PROCESSING)
                .build();
        consultingRepository.save(consulting);

        list.stream()
                .forEach(item -> {
                    ConsultingItem consultingItem = ConsultingItem.builder()
                            .consulting(consulting)
                            .item(item).build();
                    consultingItemRepository.save(consultingItem);
                });
        return response.success("예약이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> reservationListByRealtor(Long realtorNo, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        List<Consulting> consultingsList = consultingRepository.findByStatusBetween(statuses[0], statuses[1]);
        if(consultingsList.isEmpty()) {
            consultingListNotFound();
        }

        List<ConsultingResponse.ReservationRealtor> list = new ArrayList<>();
        consultingsList.stream()
            .forEach(r -> {
                Realtor realtor = realtorRepository.findByNo(r.getRealtor().getNo());
                if(realtor.getNo() == realtorNo) {
                    Users user = usersRepository.findByNo(r.getUsers().getNo());
                    List<ConsultingItem> consultingItems = r.getConsultingItems();
                    int count = 0;
                    String buildingName = "";
                    if (!consultingItems.isEmpty()) {
                        count = consultingItems.size() - 1;
                        buildingName = consultingItems.get(0).getItem().getBuildingName();
                    }
                    list.add(new ReservationRealtor(r, user, count, buildingName));
                }
            });
        if(list.isEmpty()) {
            consultingListNotFound();
        }
        return response.success(list,"상담 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> reservationListByUser(Long userNo, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        List<Consulting> consultingsList = consultingRepository.findByStatusBetween(statuses[0], statuses[1]);
        if(consultingsList.isEmpty()) {
            consultingListNotFound();
        }

        List<ConsultingResponse.ReservationUser> list = new ArrayList<>();
        consultingsList.stream()
            .forEach(r -> {
                Users user = usersRepository.findByNo(r.getUsers().getNo());
                if(user.getNo() == userNo) {
                    Realtor realtor = realtorRepository.findByNo(r.getRealtor().getNo());
                    List<ConsultingItem> consultingItems = r.getConsultingItems();
                    int count = 0;
                    String buildingName = "";
                    if (!consultingItems.isEmpty()) {
                        count = consultingItems.size() - 1;
                        buildingName = consultingItems.get(0).getItem().getBuildingName();
                    }
                    list.add(new ReservationUser(r, realtor, count, buildingName));
                }
            });
        if (list.isEmpty()){
            consultingListNotFound();
        }
        return response.success(list,"상담 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> changeStatus(ConsultingRequest.ChangeStatus request) {
        Consulting consulting = consultingRepository.findByNo(request.getCounsultingNo());
        consulting.updateStatus(request.getStatus());
        consultingRepository.save(consulting);
        return response.success("예약상태가 변경되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> consultingListNotFound() {
        return response.success("상담 목록이 존재하지 않습니다.", HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<?> detailReservation(Long consultingNo) {
        // 상담 정보
        Consulting consulting = consultingRepository.findByNo(consultingNo);
        // 상담매물에서 상담번호로 리스트 얻기
        List<ConsultingItem> consultingItems = consultingItemRepository.findByConsultingNo(consultingNo);
        // 매물번호로 매물 리스트 얻기
        List<Item> items = new ArrayList<>();
        consultingItems.stream()
            .forEach(consultingItem -> {
                items.add(itemRepository.findByNo(consultingItem.getItem().getNo()));
            });
        ConsultingResponse.ReservationDetail detail = new ConsultingResponse.ReservationDetail(consulting, items);
        return response.success(detail, "예약 상세 내역을 조회하였습니다.", HttpStatus.OK);
    }
}
