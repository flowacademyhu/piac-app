FROM maven:openjdk AS build

RUN mkdir /home/app

WORKDIR /home/app/

COPY ./pom.xml /home/app

RUN mvn -B verify clean --fail-never

COPY ./src /home/app/src

RUN mvn -B clean package -DskipTests

FROM openjdk
COPY --from=build /home/app/target/*.jar /usr/local/lib/spring-boot-skeleton.jar

ARG MYSQL_URL
ENV MYSQL_URL=$MYSQL_URL

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/usr/local/lib/spring-boot-skeleton.jar"]
