# base-imagee
FROM openjdk:8-jdk-alpine

WORKDIR app

EXPOSE 8080

# 빌드파일을 컨테이너로 복사
COPY server/build/libs/*.jar app.jar
# jar 파일 실행
ENTRYPOINT ["java", "-jar", "/app.jar"]