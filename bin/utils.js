const boxen = require('boxen');const { spawnSync } = require('child_process');
const chalk = require('chalk');  
const yargs = require("yargs");

const usage = chalk.hex('#83aaff')("\nUsage: create-ms <your-ms-name>");
const missingParams = "Você esqueceu de colocar os parâmetros";

module.exports = { showHelp, parseSentence, clone };

function parseSentence(words) {
    var sentence = "";  
    for(var i = 1; i < words.length; i++) {  
        sentence = sentence + words[i] + " ";  
    }
}

function showHelp() {
    console.log(missingParams);
    console.log(usage);
    console.log('\nOptions:\r')
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')
}

function run(cmd, args) {
    return spawnSync(cmd, args, { stdio: 'inherit' });
}

function clone() {
    const url = 'https://github.com/elainemanoelle/bempertin-frontend.git';
    const params = yargs.argv._;
    const dest = params[0];

    try {
        console.log("Olá, vamos clonar um boilerplate de MS com a estrutura padrão!");
        const cmd = run('git', ['clone', '--depth=1', url, dest]);
        console.log('CLONE', cmd);
        if (cmd.status == 0) {
            run('rm', ['-rf', `${dest}/.git`]);
        }
    } catch (error) {
          console.log("Ops, algo deu errado!");
          console.log(error);
    }

}

