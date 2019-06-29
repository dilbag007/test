const fs= require('fs');

var obj={
    name:'dilbag',
    color:'red'
}

var objToString= JSON.stringify(obj);

fs.writeFileSync('note.html',objToString);
console.log(objToString);


var toObject=fs.readFileSync('note.html');
var objbuffer= toObject;
console.log('butter value',objbuffer);

console.log(JSON.parse(objbuffer));