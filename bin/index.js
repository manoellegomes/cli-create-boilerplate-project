#! /usr/bin/env node
const yargs = require("yargs");
const utils = require('./utils.js');

if(yargs.argv._[0] == null || !yargs.argv._[0]){  
      utils.showHelp();  
      return;  
} else {
      utils.clone();
}

