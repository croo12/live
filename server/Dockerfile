FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/default.conf

ADD ./default.conf /etc/nginx/conf.d/default.conf

ADD ./build /usr/share/nginx/html

# 80 포트 오픈
EXPOSE 3000

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
