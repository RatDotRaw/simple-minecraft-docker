# minecraft-docker
minecraft dockerfiles for easy server

##simple setup
for a simple setup, you can execute the autodeploy.sh file

##docker setup
a public network is required to connect servers outside the stack. the default network name is called mc-global
```
docker network create -d overlay --attachable public
```

##waterfall setup
to use the containers you need to build and configure them first.

