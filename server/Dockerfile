FROM gradle:7.4-jdk8-alpine as builder
WORKDIR /build

# 그래들 파일이 변경되었을 때만 새롭게 의존패키지 다운로드 받게함.
COPY build.gradle.kts settings.gradle.kts /build/
RUN gradle build -x

# 빌더 이미지에서 애플리케이션 빌드
COPY . /build
RUN gradle build

# APP
FROM openjdk:8-jdk-alpine
WORKDIR /app

# 빌더 이미지에서 jar 파일만 복사
COPY --from=builder /build/build/libs/my-app-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

# root권한으로 실행
ENTRYPOINT [                                                \
    "java",                                                 \
    "-jar",                                                 \
    "-Djava.security.egd=file:/dev/./urandom",              \
    "-Dsun.net.inetaddr.ttl=0",                             \
    "my-app-0.0.1-SNAPSHOT.jar"              \
]