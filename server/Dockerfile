FROM node:16.16.0 as builder

# 작업 경로 및 디렉토리 설정
WORKDIR /app

# 디폴트 리스소 경로에 있는 package.json 파일을 /app/package.json로 복사
COPY package.json /app/package.json

# 라이브러리 충동을 무시하기 위해 실행한다.
RUN npm install --legacy-peer-deps

# 웹앱의 구동, 빌드 등 사용시 react-scripts를 사용한다.
RUN npm install react-scripts@5.0.1

# 디폴트 리소스 경로에 있는 모든 파일을 /app 으로 복사한다.
COPY . /app

# 빌드 시작
RUN npm run build:dev

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