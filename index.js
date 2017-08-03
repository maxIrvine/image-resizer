const fs = require('fs');
const readline = require('readline');
const https = require('https');
const gm = require('gm');
var request = require('request');


const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
});


rl.question("Domain name: ", (domain) => {
      rl.close();
      request(domain).pipe(fs.createWriteStream('JavaScript.png'));
      
      gm('JavaScript.png')
      .resize(240, 240, '!')
      .write('resize.png', function (err) {
        if (!err) console.log('done');
      });
});