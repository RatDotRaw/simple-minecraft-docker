const fs = require("fs");
var PropertiesReader = require("properties-reader");

// settings
// const propFile = "/app/container/server.properties";
const propFile = "test.properties";
const remSections = true;

var props = PropertiesReader(propFile, {
    writer: { saveSections: false },
});

var properties = {};
// getting environment vars
properties["rcon.port"] = "hmm";
properties["enable-command-block"] = process.env.ENABLE_COMMAND_BLOCK;
properties["gamemode"] = process.env.GAMEMODE;
properties["motd"] = process.env.MOTD;
properties["query.port"] = process.env.QUERY_PORT;
properties["pvp"] = process.env.PVP;
properties["difficulty"] = process.env.DIFFICULTY;
properties["max-players"] = process.env.MAX_PLAYERS;
properties["online-mode"] = process.env.ONLINE_MODE;
properties["view-distance"] = process.env.VIEW_DISTANCE;
properties["server-ip"] = process.env.SERVER_IP;
properties["server-port"] = process.env.SERVER_PORT;
properties["enable-rcon"] = process.env.ENABLE_RCON;
properties["resource-pack"] = process.env.RESOURCE_PACK;
properties["rcon.password"] = process.env.RCON_PASSWORD;
properties["force-gamemode"] = process.env.FORCE_GAMEMODE;
properties["white-list"] = process.env.WHITE_LIST;
// props.set("spawn-animals] = SPAWN_PROTECTION);

// set properties values
props.set("test.key", "true");
props.set("rcon.rcon.port", "yes");

Object.keys(properties).forEach((key) => {
    if (!properties[key] == "") {
        console.log("key: ", key, " value:", properties[key]);
        props.set(key, properties[key]);
    } else {
        // console.log("key is empty:", key);
    }
});

// write to properties file
props.save(propFile, function then(err, data) {
    if (err) {
        console.log("error in write a properties file");
    }
    console.log("saved data to ", propFile);

    RemoveSections();
});

function RemoveSections() {
    if (remSections == true) {
        fs.readFile(propFile, (err, data) => {
            if (err) throw error;

            var arr = data.toString().replace(/\r\n/g, "\n").split("\n");


        });
    }
}
