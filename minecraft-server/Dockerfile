#####
# ubuntu edition
#####
FROM eclipse-temurin:17-jre
EXPOSE 25565

ADD ./data /app/data

RUN apt update && apt install --no-install-recommends -y wget unzip nodejs npm && rm -rf /var/lib/apt/lists/*

# install rcon 
ADD ./rcon /app/rcon
WORKDIR /app/rcon
RUN npm install && \
    ln -s /app/rcon/rcon.js /usr/bin/rcon && \
    chmod u+x /app/rcon/rcon.js

WORKDIR /app/container

CMD ["bash", "/app/data/startup.sh"]
