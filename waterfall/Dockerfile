FROM eclipse-temurin:17-jre
EXPOSE 25565

WORKDIR /home/container

RUN mkdir /home/data
COPY ./data/* /home/data/

RUN apt update && apt install -y wget unzip

CMD ["bash", "/home/data/startup.sh" ]