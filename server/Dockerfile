# base-imagee
FROM openjdk:8-jdk-alpine
# 변수 설정 (빌드 파일의 경로)
ARG JAR_FILE=server/build/libs/live-0.0.1-SNAPSHOT.jar
# 빌드파일을 컨테이너로 복사
COPY ${JAR_FILE} app.jar
# jar 파일 실행
ENTRYPOINT ["sh", "-c", "java ${ACCESS_KEY_AWS_S3} $SECRET_KEY_AWS_S3} ${BUCKET_ADDRESS} -jar /app.jar"]