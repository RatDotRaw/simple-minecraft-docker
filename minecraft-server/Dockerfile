#####
# ubuntu edition
#####
FROM eclipse-temurin:17-jre
EXPOSE 25565

# container settings
ENV     RCON_PORT="25575" \
        ENABLE_COMMAND_BLOCK="false" \
        GAMEMODE="survival" \
        MOTD="A Minecraft server in Docker" \
        QUERY_PORT="25565" \
        PVP="true" \
        DIFFICULTY="easy" \
        MAX_PLAYERS="20" \
        ONLINE_MODE="true" \
        VIEW_DISTANCE="10" \
        SERVER_IP="" \
        SERVER_PORT="25565" \
        ENABLE_RCON="true" \
        RESOURCE_PACK="" \
        RCON_PASSWORD="Ch@ng3m3" \
        FORCE_GAMEMODE="false" \
        WHITE_LIST="false" \
        SPAWN_PROTECTION="16" 

ADD ./data /app/data

RUN apt update && apt install --no-install-recommends -y wget unzip nodejs npm && rm -rf /var/lib/apt/lists/*

# install rcon 
ADD ./rcon /app/rcon
WORKDIR /app/rcon
RUN npm install && \
    ln -s /app/rcon/rcon.js /usr/bin/rcon && \
    chmod u+x /app/rcon/rcon.js

# install properties-edit
ADD ./properties-edit /app/properties-edit
WORKDIR /app/properties-edit
RUN npm install

WORKDIR /app/container

CMD ["bash", "/app/data/startup.sh"]
