var Rcon = require("rcon");

const host = 'localhost'
const port = '25575'
const password = '"changeme"'

var conn = new Rcon(host, port, password);

//args to string
var argumentString = "";
var args = process.argv.splice(process.execArgv.length + 2)
for (var i = 0; i < args.length; i++) {
  if (i === args.length - 1) argumentString += args[i]
  else argumentString += args[i] + ' '
}

//check if argumentstring is empty
if (argumentString.length < 1) {
    console.log("RconApp::Error: Please specify an RCON command");
    process.exit();
}

console.log("RconApp::Relaying RCON command: " + argumentString);

conn.on("auth", function () {
    console.log("connected!");
    conn.send(argumentString)
}).on("response", function (str) {
    console.log("Response: " + str);
}).on("error", function (err) {
    console.log("Error: " + err);
}).on("end", function () {
    console.log("Connection closed");
    process.exit();
});

conn.connect();