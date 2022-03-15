FROM eclipse-temurin:17-jre
EXPOSE 25565

WORKDIR /home/container

COPY ./data /home

RUN apt update && apt install -y wget unzip nodejs

COPY ./rcon /home

CMD ["bash", "/home/data/startup.sh" ]
