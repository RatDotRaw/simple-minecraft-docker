#!/bin/bash

if [ -f "/home/container/minecraft/start.sh" ]; then
    echo "+=+ Executing start.sh."
    bash /home/container/minecraft/start.sh
else
    echo "+=+ start.sh not found, executing setup.sh."
    bash /home/container/data/setup.sh
fi