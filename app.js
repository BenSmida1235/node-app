console.log("starting app.js");

const notes = require('./notes.js');
const yargs = require("yargs");
const argv = yargs.argv;

console.log(yargs.argv);

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding note");
} else if (command === "remove") {
  console.log("removing note");
} else if (command === "read") {
  console.log("reading note");
} else if (command === "list") {
  console.log("listing all notes");
}else {
    console.log("unknown command was used!");
}