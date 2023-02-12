package com.ssafy.live.consulting.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.SMSContent;
import com.ssafy.live.common.exception.BadRequestException;
import com.ssafy.live.common.service.SMSService;
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
import com.ssafy.live.house.domain.entity.ItemImage;
import com.ssafy.live.house.domain.repository.ItemImageRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.ssafy.live.common.exception.ErrorCode.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConsultingService {

    private final Response response;
    private final ConsultingRepository consultingRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ItemRepository itemRepository;
    private final ItemImageRepository itemImageRepository;
    private final NoticeRepository noticeRepository;
    private final ConsultingItemRepository consultingItemRepository;
    private final SMSService smsService;

    public ResponseEntity<?> reserve(UserDetails user, ConsultingRequest.Reserve reserve) {
        Users users = usersRepository.findById(user.getUsername())
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

        //smsService.sendSMS(consulting.getNo(), SMSContent.NEW_CONSULTING, consulting.getUsers());
        return response.success("예약이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?>  reservationListByRealtor(UserDetails user, int status) {
        ConsultingStatus[] statuses = ConsultingStatus.setStatus(status);
        if(user.getAuthorities().contains(new SimpleGrantedAuthority("USER"))) {
            return listByUser(usersRepository.findById(user.getUsername()).get().getNo(), statuses);
        } else {
            return listByRealtor(realtorRepository.findByBusinessNumber(user.getUsername()).get().getNo(), statuses);
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
                    buildingName = consultingItems.get(0).getItem().getHouse().getBuildingName();
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
                        buildingName = consultingItems.get(0).getItem().getHouse().getBuildingName();
                        System.out.println("~~~~~~~~~~~~~~"+buildingName);
                    }
                    list.add(ReservationUser.toEntity(consulting, realtor, buildingName, count));
                });
        if (list.isEmpty()) {
            listNotFound();
        }
         return response.success(list, "상담 목록을 조회하였습니다.", HttpStatus.OK);
   }

    public ResponseEntity<?> changeStatus(UserDetails user, ConsultingRequest.ChangeStatus request) {
        Consulting consulting = consultingRepository.findById(request.getCounsultingNo())
            .orElseThrow(() -> new BadRequestException(CONSULTING_NOT_FOUND));

            consulting.updateStatus(request.getStatus());
        consultingRepository.save(consulting);
        String writer, info;
        SMSContent smsContent;
        if(user.getAuthorities().contains(new SimpleGrantedAuthority("USER"))) {
            writer = consulting.getRealtor().getName();
        } else {
            writer = consulting.getUsers().getName();
        }
        if(request.getStatus()==ConsultingStatus.CONSULTING_CONFIRMED.getValue()) {
            info = "예약이 확정되었습니다.";
            smsContent = SMSContent.CONSULTING_CONFIRMED;
        } else {
            info = "예약이 취소되었습니다.";
            smsContent = SMSContent.CONSULTING_CANCEL;
        }
        Notice notice = Notice.builder()
                .users(consulting.getUsers())
                .realtor(consulting.getRealtor())
                .noticeInfo(info)
                .noticeWriter(writer)
                .build();
        noticeRepository.save(notice);

        //smsService.sendSMS(consulting.getNo(), smsContent, consulting.getUsers());

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

        //smsService.sendSMS(consulting.getNo(), SMSContent.CONSULTING_CHANGE, consulting.getUsers());

        return response.success("상담 매물 수정이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> infoForContact(UserDetails user, Long itemNo) {
        Item item = itemRepository.findById(itemNo).get();
        ConsultingResponse.ItemForContract.RealtorInfo realtor = ConsultingResponse.ItemForContract.RealtorInfo
            .toEntity(item.getRealtor());
        ConsultingResponse.ItemForContract.UserInfo users = ConsultingResponse.ItemForContract.UserInfo
            .toEntity(usersRepository.findById(user.getUsername()).get());

        List<ItemImage> itemImages = itemImageRepository.findByItem(item);
        List<String> images = itemImages.stream().map((i)->i.getImageSrc()).collect(Collectors.toList());

        ConsultingResponse.ItemForContract.ItemInfo itemInfo = ConsultingResponse.ItemForContract.ItemInfo
            .toEntity(item, images);
        ConsultingResponse.ItemForContract contractInfo = ConsultingResponse.ItemForContract.toEntity(realtor, users, itemInfo);
        return response.success(contractInfo, "계약 할 매물 정보를 조회하였습니다.", HttpStatus.OK);
    }
}
