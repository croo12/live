ROM gradle:7.6-jdk8 as builder
WORKDIR /build
# 그래들 파일이 변경되었을 때만 새롭게 의존패키지 다운로드 받게함.
COPY build.gradle settings.gradle /build/
RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true
# 빌더 이미지에서 애플리케이션 빌드
COPY . /build
RUN gradle build -x test --parallel
# APP
FROM openjdk:8-jdk-alpine
WORKDIR /app
# 빌드파일을 컨테이너로 복사
COPY server/build/libs/live-0.0.1-SNAPSHOT.jar ./
# 노출 8080
EXPOSE 8080
# jar 파일 실행
ENTRYPOINT ["java", "-jar", "-Djava.security.egd=file:/dev/./urandom", "-Dsun.net.inetaddr.ttl=0", "/live-0.0.1-SNAPSHOT.jar"]