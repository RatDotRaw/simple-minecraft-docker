FROM eclipse-temurin:17-jre
#FROM openjdk:16-alpine
EXPOSE 25565

WORKDIR /home/container

RUN mkdir /home/data
COPY ./data/* /home/data/

#RUN apk add --no-cache --upgrade bash
RUN apt update && apt install -y wget unzip

CMD ["bash", "/home/data/startup.sh" ]
