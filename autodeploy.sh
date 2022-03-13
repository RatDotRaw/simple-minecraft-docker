#!/bin/bash

#building images
echo '+=+ Building images.'
sudo docker build -t minecraft-docker ./minecraft-server/
sudo docker build -t waterfall-docker ./waterfall/

#creating public network
echo '+=+ Creating public network'
sudo docker network create -d overlay --attachable mc-global

#create stack
echo '+=+ Creating stack.'
sudo docker-compose up