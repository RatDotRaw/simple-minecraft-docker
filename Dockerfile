#####
# ubuntu edition
#####
FROM eclipse-temurin:17-jre
EXPOSE 25565

# container env settings
# required settings
        # option 0: manual setup
        # option 1: automatic setup, enter version from *.list or enter cutom download url(jar expected) and renames jar to $jar_name
        # option 2: download link(zip) and extract (start.sh, *.jar and eula.txt required)
        # option 3: copy local *.zip(located in /data) and extract (start.sh, *.jar and eula.txt required)
ENV     OPTION="1" \ 
        URL="https://serverjars.com/api/fetchJar/paper/1.18.2" \
        JAR_NAME="server.jar" \
        XMX="2G" \
        XMS="512M" 

# leave empty/remove the line to not overwrite set settings
ENV     ENABLE_COMMAND_BLOCK="false" \
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

# install nodejs apps
WORKDIR /app/data/node
RUN npm install && \
    ln -s /app/data/node/rcon.js /usr/bin/rcon && \
    chmod u+x /app/data/node/rcon.js

WORKDIR /app/container

CMD ["bash", "/app/data/startup.sh"]
