
const fs=require('fs');
const os=require('os');
const data= require('./newfile.js');
const _ = require('lodash');
const yargs= require ('yargs');

var yargsValue= yargs.argv;
console.log(yargsValue);



console.log(process.argv);
var command= process.argv[2];
var command2 =process.argv[3];

if(command === 'add'){
    data.add(yargsValue.name, yargsValue.body);
}
else if(command === 'list'){
   data.argvAdd();
}
else{
    console.log('unknown data');
}

