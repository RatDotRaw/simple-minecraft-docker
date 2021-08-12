#!/bin/bash
source config

if [ -f "/home/container/minecraft/start.sh" ]; then
    if [ -f "/home/container/minecraft/$jar_name" ]; then
        echo "+=+ Executing start.sh."
        bash /home/container/minecraft/start.sh
    else
        echo "+=+ server not found, executing setup.sh."
        bash /home/container/data/setup.sh
    fi
fi