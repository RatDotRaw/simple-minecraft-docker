# simple-minecraft-docker
Minecraft dockerfile for a simple easy server

# :exclamation: Be informed
All the requirements have default values if you use the docker-compose.yml.
If you are not using the docker-compose.yml, the container may behave unexpectedly.

# Run commands inside the container.
The container contains a node.js script to execute commands via RCON.
Commands can be isseud with the folowing command:
```
docker exec minecraft-docker rcon (command here)
```

# setup
### Creating public network (optinal)
A public network is required to connect servers outside the container/stack. the default network name is called mc-global.
This is only required for when you are planning it to use the server for bungeecord.
```
docker network create -d overlay --attachable public
```

### Configuring the containers.
The container can partialy be configured with environment variables.
The container needs to beconfigured before they should be build.
The environment variables can be configured in the Dockerfiles and/or in the docker-compose file.
#### Required environment variables:
```
OPTION="1"
UTL="https://serverjars.com/api/fetchJar/paper/1.18.2"
JAR_NAME"server.jar"
XMX="2G"
XMS="512M"
```
#### Optional environmetn variables:
```
RCON_PORT="25575"
ENABLE_COMMAND_BLOCK="false"
GAMEMODE="survival"
MOTD="A Minecraft server in Docker"
QUERY_PORT="25565"
PVP="true"
DIFFICULTY="easy"
MAX_PLAYERS="20"
ONLINE_MODE="true"
VIEW_DISTANCE="10"
SERVER_IP=""
SERVER_PORT="25565"
ENABLE_RCON="true"
RESOURCE_PACK=""
RCON_PASSWORD="Ch@ng3m3"
FORCE_GAMEMODE="false"
WHITE_LIST="false"
SPAWN_PROTECTION="16"

```
The required environment variables of the container can also be configured via the files located in the respective directory:
```
./minecraft-docker/data/config
```

### Volumes
The container filesystem can be safely mounted at:
#### Required mountpoints
```
/app/container
```
#### Optional mount points:
```
/app/container/plugins
/app/container/logs
```

### Building the containers.
The container can be build by running the following command:
#### Ubuntu container:
```
docker build -t minecraft-docker -f Dockerfile ./minecraft-docker/
```
#### Alpine container:
```
docker build -t minecraft-docker -f DockerfileAlpine ./minecraft-docker/
```

### Running the container
The container can be run with the docker-compose.yml file and the following command:
```
docker-compose up -d
```
