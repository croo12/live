package com.ssafy.live.consulting.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.ConsultingStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest.AddItem;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationRealtor;
import com.ssafy.live.consulting.controller.dto.ConsultingResponse.ReservationUser;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.consulting.domain.entity.ConsultingItem;
import com.ssafy.live.consulting.domain.repository.ConsultingItemRepository;
import com.ssafy.live.consulting.domain.repository.ConsultingRepository;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.repository.ItemImageRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
    private final ItemImageRepository itemImageRepository;

    public ResponseEntity<?> reserve(ConsultingRequest.Reserve reserve) {
        Users users = usersRepository.findById(reserve.getUserNo()).get();
        if(users == null) return response.success("해당하는 사용자 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        Realtor realtor = realtorRepository.findById(reserve.getRealtorNo()).get();
        if(realtor == null) return response.success("해당하는 공인중개사 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        Consulting consulting = Consulting.builder()
                .realtor(realtor)
                .users(users)
                .consultingDate(reserve.getConsultingDate())
                .requirement(reserve.getRequirement())
                .status(ConsultingStatus.RESERVERVATION_PROCESSING)
                .build();
        consultingRepository.save(consulting);

        reserve.getItemList()
                .stream()
                .forEach(no -> {
                    Item item = itemRepository.findById(no).get();
                    ConsultingItem consultingItem = ConsultingItem.builder()
                            .consulting(consulting)
                            .item(item)
                            .build();
                    consultingItemRepository.save(consultingItem);
                });

        return response.success("예약이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> reservationListByRealtor(Long realtorNo, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        List<Consulting> consultingsList = consultingRepository.findByRealtorAndStatusOrStatus(realtorRepository.findById(realtorNo).get(), statuses[0], statuses[1]);
        if (consultingsList.isEmpty()) {
            listNotFound();
        }

        List<ConsultingResponse.ReservationRealtor> list = new ArrayList<>();
        consultingsList.stream()
                .forEach(consulting -> {
                        Users user = consulting.getUsers();
                        List<ConsultingItem> consultingItems = consulting.getConsultingItems();
                        int count = 0;
                        String buildingName = "";
                        if (consultingItems.size()>0) {
                            count = consultingItems.size() - 1;
                            buildingName = consultingItems.get(0).getItem().getBuildingName();
                        }
                        list.add(ReservationRealtor.toResponse(consulting, user, buildingName, count));
                });
        if (list.isEmpty()) {
            listNotFound();
        }

        return response.success( list, "상담 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> reservationListByUser(Long userNo, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        List<Consulting> consultingsList = consultingRepository.findByUsersAndStatusOrStatus(usersRepository.findById(userNo).get(), statuses[0], statuses[1]);
        if (consultingsList.isEmpty()) {
            listNotFound();
        }

        List<ConsultingResponse.ReservationUser> list = new ArrayList<>();
        consultingsList.stream()
                .forEach(consulting -> {
                    Realtor realtor = consulting.getRealtor();
                    List<ConsultingItem> consultingItems = consulting.getConsultingItems();
                    int count = 0;
                    String buildingName = "";
                    if (consultingItems.size()>0) {
                        count = consultingItems.size() - 1;
                        buildingName = consultingItems.get(0).getItem().getBuildingName();
                    }
                    list.add(ReservationUser.toEntity(consulting, realtor, buildingName, count));
                });
        if (list.isEmpty()) {
            listNotFound();
        }
         return response.success("상담 목록을 조회하였습니다.", HttpStatus.OK);
   }

    public ResponseEntity<?> changeStatus(ConsultingRequest.ChangeStatus request) {
        Consulting consulting = consultingRepository.findById(request.getCounsultingNo()).get();
        if(consulting == null) return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        consulting.updateStatus(request.getStatus());
        consultingRepository.save(consulting);
        return response.success("예약상태가 변경되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> listNotFound() {
        return response.success("목록이 존재하지 않습니다.", HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<?> detailReservation(Long consultingNo) {
        Consulting consulting = consultingRepository.findById(consultingNo).get();
        if(consulting == null) return response.fail("해당하는 상담 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        List<ConsultingItem> consultingItems = consultingItemRepository.findByConsultingNo(consultingNo);
        List<ConsultingResponse.ReservationDetail.MyConsultingItem> items = new ArrayList<>();
        consultingItems.stream()
                .forEach(consultingItem -> {
                    Item item = consultingItem.getItem();
                    House house = consultingItem.getItem().getHouse();
                    items.add(ConsultingResponse.ReservationDetail.MyConsultingItem.toEntity(item, house));
                });
        ConsultingResponse.ReservationDetail detail = ConsultingResponse.ReservationDetail.toEntity(consultingNo, consulting, items);
        return response.success(detail, "예약 상세 내역을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> addConsultingItems(AddItem addItem) {
        Set<Long> noList = addItem.getItemList();
        Consulting consulting = consultingRepository.findById(addItem.getConsultingNo()).get();
        if(consulting == null) return response.fail("해당하는 상담 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        List<ConsultingItem> consultingItems = consultingItemRepository.findByConsultingNo(addItem.getConsultingNo());
        consultingItems.stream()
                .forEach(consultingItem -> {
                    if(noList.contains(consultingItem.getItem().getNo())) {
                        noList.remove(consultingItem.getItem().getNo());
                    }else {
                        consultingItemRepository.delete(consultingItem);
                    }
                });
        noList.stream()
            .forEach(index->{
                Item item = itemRepository.findById(index).get();
                ConsultingItem consultingItem = ConsultingItem.builder()
                    .consulting(consulting)
                    .item(item).build();
                consultingItemRepository.save(consultingItem);
            });
        return response.success("상담 매물 수정이 완료되었습니다.", HttpStatus.OK);
    }
}
