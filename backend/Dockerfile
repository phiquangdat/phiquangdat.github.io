FROM openjdk:21-jdk-slim AS build

WORKDIR /app

COPY ./.mvn ./.mvn
COPY ./mvnw ./mvnw

COPY pom.xml ./
COPY src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:21-jdk-slim AS runtime

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

COPY src/main/resources/application.properties ./application.properties

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

