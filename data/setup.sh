#!/bin/bash

source /app/data/config


option_0 () { #manual setup
    echo "+=+ Manual setup selected"
}

option_1 () { #automatic setup
    echo "+=+ Automatic setup selected."
    echo "+=+ Downloading jar from $url."
    wget --continue -O /app/container/$jar_name $url

    create_startscript
    start_server
    create_eula
    write_properties
    start_server
}

option_2 () {
    echo "+=+ Download link(zip) selected."
    echo "+=+ Downloading file from $url."
    wget --continue -O /app/data/server.zip $url
    echo "+=+ Unzipping file."
    unzip -d /app/container /app/data/server.zip
    echo "+=+ Removing zip files."
    rm --force /app/data/*.zip

    create_startscript
    start_server
    create_eula
    write_properties
    start_server
}

option_3 () {
    echo "+=+ Unzipping file."
    unzip -d /app/container/ /app/data/*.zip
    echo "+=+ Removing zip files."
    rm --force /app/data/*.zip

    start_server
}


start_server () {
    echo "+=+ Starting server."
    bash /app/container/start.sh
}

create_startscript () {
    echo "+=+ Creating start.sh."
    echo "
    #!/bin/bash
    $start_command
    " > /app/container/start.sh
}

create_eula () {
    echo "+=+ Creating eula.txt"
    echo "#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).
    #You also agree that Minecraft is tasty, and the best game in the world.
    eula=true
    " > /app/container/eula.txt
}

write_properties () {
    echo "+=+ writing properties."
    node $nodedir/properties-edit.js
}

if [ "$option" == "0" ]; then
    option_0
elif [ "$option" == "1" ]; then
    option_1
elif [ "$option" == "2" ]; then
    option_2
elif [ "$option" == "3" ]; then
    option_3
else
    echo "+=+ Invalid option."
fi

echo "+=+ Exiting..."