package com.ssafy.live.consulting.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.exception.BadRequestException;
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
import com.ssafy.live.house.domain.repository.ItemRepository;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static com.ssafy.live.common.domain.exception.ErrorCode.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConsultingService {

    private final Response response;
    private final ConsultingRepository consultingRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ItemRepository itemRepository;
    private final NoticeRepository noticeRepository;
    private final ConsultingItemRepository consultingItemRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public ResponseEntity<?> reserve(String token, ConsultingRequest.Reserve reserve) {
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        Users users = usersRepository.findById(authentication.getName())
            .orElseThrow(() -> new BadRequestException(USER_NOT_FOUND));
        Realtor realtor = realtorRepository.findById(reserve.getRealtorNo())
            .orElseThrow(() -> new BadRequestException(REALTOR_NOT_FOUND));
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

    public ResponseEntity<?>  reservationListByRealtor(String token, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            return listByUser(usersRepository.findById(authentication.getName()).get().getNo(), statuses);
        } else {
            return listByRealtor(realtorRepository.findByBusinessNumber(authentication.getName()).get().getNo(), statuses);
        }
    }

    private ResponseEntity<?> listByRealtor(Long realtoNo, ConsultingStatus[] statuses) {
        List<Consulting> consultingsList = consultingRepository.findByRealtorAndStatusOrStatus(realtorRepository.findById(realtoNo).get(), statuses[0], statuses[1]);
        List<ConsultingResponse.ReservationRealtor> list = new ArrayList<>();
        if (consultingsList.isEmpty()) {
            listNotFound();
        }
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

    public ResponseEntity<?> listByUser(Long userNo, ConsultingStatus[] statuses) {
        List<Consulting> consultingsList = consultingRepository.findByUsersAndStatusOrStatus(usersRepository.findById(userNo).get(), statuses[0], statuses[1]);
        List<ConsultingResponse.ReservationUser> list = new ArrayList<>();
        if (consultingsList.isEmpty()) {
            listNotFound();
        }
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
         return response.success(list, "상담 목록을 조회하였습니다.", HttpStatus.OK);
   }

    public ResponseEntity<?> changeStatus(String token, ConsultingRequest.ChangeStatus request) {
        Consulting consulting = consultingRepository.findById(request.getCounsultingNo())
            .orElseThrow(() -> new BadRequestException(CONSULTING_NOT_FOUND));

            consulting.updateStatus(request.getStatus());
        consultingRepository.save(consulting);
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        String writer, info;
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            writer = consulting.getRealtor().getName();
        } else {
            writer = consulting.getUsers().getName();
        }
        if(request.getStatus()==ConsultingStatus.CONSULTING_CONFIRMED.getValue()) {
            info = "예약이 확정되었습니다.";
        } else {
            info = "예약이 취소되었습니다.";
        }
        Notice notice = Notice.builder()
                .users(consulting.getUsers())
                .realtor(consulting.getRealtor())
                .noticeInfo(info)
                .noticeWriter(writer)
                .build();
        noticeRepository.save(notice);
        return response.success("예약상태가 변경되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> listNotFound() {
        return response.success("목록이 존재하지 않습니다.", HttpStatus.NO_CONTENT);
    }

    public ResponseEntity<?> detailReservation(Long consultingNo) {
        Consulting consulting = consultingRepository.findById(consultingNo).get();
        if(consulting == null) {
            return response.fail("해당하는 상담 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
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

    public ResponseEntity<?> addConsultingItems(Long consultingNo, AddItem addItem) {
        Set<Long> noList = addItem.getItemList();
        Consulting consulting = consultingRepository.findById(consultingNo).get();

        List<ConsultingItem> consultingItems = consultingItemRepository.findByConsultingNo(consultingNo);
        if(consultingItems.isEmpty()) {
            return response.fail("해당하는 상담 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
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
        Notice notice = Notice.builder()
                .users(consulting.getUsers())
                .realtor(consulting.getRealtor())
                .noticeInfo("상담 매물이 변경되었습니다.")
                .noticeWriter(consulting.getRealtor().getName())
                .build();
        noticeRepository.save(notice);
        return response.success("상담 매물 수정이 완료되었습니다.", HttpStatus.OK);
    }
}
