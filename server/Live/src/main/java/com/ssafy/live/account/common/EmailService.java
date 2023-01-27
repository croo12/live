package com.ssafy.live.account.common;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class EmailService {

    @Autowired
    private JavaMailSenderImpl mailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;


    @Value("${spring.mail.username}")
    private String setFrom;

    public void joinEmail(String email, String password) {
        String toMail = email;
        String title = "[Live] 비밀번호 찾기 메일입니다."; // 이메일 제목

        Context context = new Context();
        context.setVariable("password", password);
        String content = templateEngine.process("findPassword", context);
        sendMail(toMail, title, content);
    }

    public void sendMail(String toMail, String title, String content) {
        System.out.println("!!!!!!!!!!!!!");
        MimeMessage message = mailSender.createMimeMessage();
        System.out.println("??????????? ");
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
            helper.setFrom(new InternetAddress(setFrom, "Live", "UTF-8"));
            helper.setTo(toMail);
            helper.setSubject(title);
            helper.setText(content, true);
            helper.addInline("image1", new ClassPathResource("templates/images/image1.png"));
            helper.addInline("image2", new ClassPathResource("templates/images/image2.png"));
            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

    }
}
