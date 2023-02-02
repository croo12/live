# base-imagee
FROM openjdk:8-jdk-alpine
# 변수 설정 (빌드 파일의 경로)
ARG JAR_FILE=target/*.jar
# 빌드파일을 컨테이너로 복사
COPY server/build/libs/*.jar app.jar
# jar 파일 실행
ENTRYPOINT ["java", "-jar", "/app.jar"]