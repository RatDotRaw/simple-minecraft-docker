#!/bin/bash

pwd

source /home/data/config

if [ -f "/home/container/start.sh" ]; then
    if [ -f "/home/container/$jar_name" ]; then
        echo "+=+ Executing start.sh."
        bash /home/container/start.sh
    fi
else
    echo "+=+ server not found, executing setup.sh."
    bash /home/data/setup.sh
fi
