package com.ssafy.live.common.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.SMSContent;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.consulting.domain.repository.ConsultingRepository;
import com.ssafy.live.webrtc.Room;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Slf4j
@Component
public class SMSService {
    private final ConsultingRepository consultingRepository;

    public SMSService(ConsultingRepository consultingRepository) {
        this.consultingRepository = consultingRepository;
    }

    public void sendSMS(Long no, SMSContent smsContent, Realtor realtor){
        String content = realtor.getName()+"님 "+smsContent.getMessage()+"("+no+")";
        sendSMS(content, realtor.getPhone());
    }
    public void sendSMS(Long no, SMSContent smsContent, Users user){
        String content = user.getName()+"님 "+smsContent.getMessage()+"("+no+")";
        sendSMS(content, user.getPhone());
    }

    public void sendSMS(String content, String phone) {
        String callingNumber = "01092352527";

        JSONObject bodyJson = makeBodyJson(content, phone, callingNumber);
        String body = bodyJson.toString();

        trySMS(body);
    }

    @Scheduled(cron="0 0 8 * * ?")
    public void reserveSMSScheduler() {
        LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.of(0,0,0)); //오늘 00:00:00
        LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59)); //오늘 23:59:59
        List<Consulting> consultingList = consultingRepository.findByConsultingDateBetween(start, end);

        for(Consulting consulting : consultingList){
            sendSMS(consulting.getNo(), SMSContent.TODAY_CONSULTING, consulting.getUsers());
        }
    }


    private void reserveSMS(String content, String phone, LocalDateTime consultingDate) {
        String callingNumber = "01092352527";
        LocalDateTime reserveTime = LocalDateTime.of(
                consultingDate.getYear(),
                consultingDate.getMonth(),
                consultingDate.getDayOfMonth(),
                8,
                0);

        String reserveTimeFormat = reserveTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        JSONObject bodyJson = makeBodyJson(content, phone, callingNumber);
        bodyJson.put("reserveTime", reserveTimeFormat);
        String body = bodyJson.toString();

        trySMS(body);
    }


    private void trySMS(String body){
        String hostNameUrl = "https://sens.apigw.ntruss.com";     		// 호스트 URL
        String requestUrl= "/sms/v2/services/";                   		// 요청 URL
        String requestUrlType = "/messages";
        String accessKey = "SSw1ehSlYG6Bd6kRSD4i";                     	// 네이버 클라우드 플랫폼 회원에게 발급되는 개인 인증키			// Access Key : https://www.ncloud.com/mypage/manage/info > 인증키 관리 > Access Key ID
        String secretKey = "WDBzU4bDeoVKQGE3UTf0bab1n1JgLfp0I7SQsfTB";  // 2차 인증을 위해 서비스마다 할당되는 service secret key	// Service Key : https://www.ncloud.com/mypage/manage/info > 인증키 관리 > Access Key ID
        String serviceId = "ncp:sms:kr:293401522147:live-live";

        String method = "POST";                                            // 요청 method
        String timestamp = Long.toString(System.currentTimeMillis());    // current timestamp (epoch)
        requestUrl += serviceId + requestUrlType;
        String apiUrl = hostNameUrl + requestUrl;

        try {
            log.info(body);

            URL url = new URL(apiUrl);

            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setUseCaches(false);
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestProperty("content-type", "application/json");
            con.setRequestProperty("x-ncp-apigw-timestamp", timestamp);
            con.setRequestProperty("x-ncp-iam-access-key", accessKey);
            con.setRequestProperty("x-ncp-apigw-signature-v2", makeSignature(requestUrl, timestamp, method, accessKey, secretKey));
            con.setRequestMethod(method);
            con.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());

            wr.write(body.getBytes());
            wr.flush();
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            log.info("responseCode" + " " + responseCode);
            if (responseCode == 202) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else { // 에러 발생
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }

            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            log.info(response.toString());

        } catch (Exception e) {
            log.debug(String.valueOf(e));
        }
    }

    private JSONObject makeBodyJson(String content, String phone, String callingNumber) {
        // JSON 을 활용한 body data 생성
        JSONObject bodyJson = new JSONObject();
        JSONObject toJson = new JSONObject();
        JSONArray toArr = new JSONArray();

        //toJson.put("subject","");							// Optional, messages.subject	개별 메시지 제목, LMS, MMS에서만 사용 가능
        //toJson.put("content","sms test in spring 111");	// Optional, messages.content	개별 메시지 내용, SMS: 최대 80byte, LMS, MMS: 최대 2000byte
        toJson.put("to", phone);                        // Mandatory(필수), messages.to	수신번호, -를 제외한 숫자만 입력 가능
        toArr.put(toJson);

        bodyJson.put("type", "SMS");                            // Madantory, 메시지 Type (SMS | LMS | MMS), (소문자 가능)
        //bodyJson.put("contentType","");					// Optional, 메시지 내용 Type (AD | COMM) * AD: 광고용, COMM: 일반용 (default: COMM) * 광고용 메시지 발송 시 불법 스팸 방지를 위한 정보통신망법 (제 50조)가 적용됩니다.
        //bodyJson.put("countryCode","82");					// Optional, 국가 전화번호, (default: 82)
        bodyJson.put("from", callingNumber);                    // Mandatory, 발신번호, 사전 등록된 발신번호만 사용 가능
        //bodyJson.put("subject","");						// Optional, 기본 메시지 제목, LMS, MMS에서만 사용 가능
        bodyJson.put("content", content);                    // Mandatory(필수), 기본 메시지 내용, SMS: 최대 80byte, LMS, MMS: 최대 2000byte
        bodyJson.put("messages", toArr);                    // Mandatory(필수), 아래 항목들 참조 (messages.XXX), 최대 1,000개
        return bodyJson;
    }

    private String makeSignature(String url, String timestamp, String method, String accessKey, String secretKey) throws NoSuchAlgorithmException, InvalidKeyException {
        String space = " ";                    // one space
        String newLine = "\n";                 // new line

        String message = method +
                space +
                url +
                newLine +
                timestamp +
                newLine +
                accessKey;

        SecretKeySpec signingKey;
        String encodeBase64String;

        signingKey = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(signingKey);
        byte[] rawHmac = mac.doFinal(message.getBytes(StandardCharsets.UTF_8));
        encodeBase64String = Base64.getEncoder().encodeToString(rawHmac);
        return encodeBase64String;
    }

}
