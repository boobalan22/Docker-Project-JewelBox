# Use Java 17 base image
FROM eclipse-temurin:17-jre-alpine

# Build ARG for the jar file name (adjust if needed)
ARG artifact=target/spring-boot-web.jar

# Working directory inside the container
WORKDIR /opt/app

# Copy the built jar to the container
COPY ${artifact} app.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
