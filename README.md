# minecraft-docker
minecraft dockerfiles for easy server

## simple setup
for a simple setup, you can execute the autodeploy.sh file after configuring both the minecraft-server and waterfall.

## setup
### creating public network
a public network is required to connect servers outside the stack. the default network name is called mc-global
```
docker network create -d overlay --attachable public
```

### configuring the containers.
both containers need to beconfigured before they should be build.
the configuration file of both containers are located in their respective directories.
```
./minecraft-server/data/config
./waterfall/data/config
```

### building the containers.
both containers can be build by running the following commands:
```
docker build -t minecraft-docker ./minecraft-server/
docker build -t waterfall-docker ./waterfall/
```

### running the containers
the containers can be run with the docker-compose.yml file
configuring the docker-compose.yml file is recomended.
```
docker-compose up
```

## separate containers
### minecraft server only
to only use the minecraft container you need to configure and build them yourself
```
docker build -t minecraft-docker ./minecraft-server/
```

### waterfall only
to use the containers you need to build and configure them first.
Then you can build the image with the command:
```
docker build -t waterfall-docker ./waterfall/
```

