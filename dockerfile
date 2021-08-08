FROM adoptopenjdk/openjdk16:ubuntu-jre
#FROM openjdk:16-alpine
EXPOSE 25565

WORKDIR /home/container/minecraft

RUN mkdir /home/container/data 
#RUN mkdir /home/container/minecraft
COPY ./data/* /home/container/data/

#RUN apk add --no-cache --upgrade bash
RUN apt update && apt install -y wget unzip

CMD ["bash", "/home/container/data/startup.sh" ]