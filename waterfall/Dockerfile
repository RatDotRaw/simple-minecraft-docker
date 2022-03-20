FROM eclipse-temurin:17-jre
EXPOSE 25565

WORKDIR /app/container

RUN mkdir /home/data
COPY ./data/* /app/data/

RUN apt update && apt install -y wget unzip


CMD ["bash", "/app/data/startup.sh" ]