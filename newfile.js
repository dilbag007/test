console.log('my second file');

// module.exports.myfun= ()=>{
//     console.log('export module');
//     return 'return value';
// }
const fs=require('fs');
module.exports.add=(a,b)=>{

    console.log("add function");
    var sum= a+b;
    return 'sum of the value = '+sum;
    
}

var add=(name, body)=>{
var arr=[];
var newarr={
    name,
    body
};

try{
    var file= fs.readFileSync('work.html');
    arr=JSON.parse(file);
}catch(e){

}

var duplicate= arr.filter((newarr)=> newarr.name===name);

console.log( "hello",duplicate.length);

if(duplicate.length=== 0){

arr.push(newarr);
console.log(arr);
fs.writeFileSync('work.html',JSON.stringify(arr));
}

}

var list=()=>{
    console.log("adding system value");
}
module.exports={add, list};