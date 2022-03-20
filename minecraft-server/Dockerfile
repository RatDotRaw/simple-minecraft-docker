FROM eclipse-temurin:17-jre
EXPOSE 25565

ADD ./data /app/data

RUN apt update && apt install -y wget unzip nodejs npm

# install rcon 
ADD ./rcon /app/rcon
WORKDIR /app/rcon
RUN npm install
RUN ln -s /app/rcon/

WORKDIR /home/container

CMD ["bash", "/app/data/startup.sh" ]
