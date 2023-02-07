# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용.
FROM nginx

# nginx의 기본 설정을 삭제한다.
RUN rm -rf /etc/nginx/conf.d

# 디폴트 리소스 경로에 있는 conf 폴더를 도커의 /etc/nginx 폴더로 복사한다.
COPY conf /etc/nginx

# 맨위의 as builder 로부터 복사한다는 것을 선언한다. 
# 그리고 builder의 /app/build를 새로 생성된 컨테이너의 /usr/share/nginx/html로 복사한다.
COPY --from=builder /app/build /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
