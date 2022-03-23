#!/bin/bash
pwd
source /app/data/config

if [ -f "/app/container/start.sh" ]; then
    if [ -f "/app/container/$jar_name" ]; then
        echo "+=+ Executing start.sh."
        node /app/properties-edit/properties-edit.js
        bash /app/container/start.sh
    fi
else
    echo "+=+ server not found, executing setup.sh."
    bash /app/data/setup.sh
fi
