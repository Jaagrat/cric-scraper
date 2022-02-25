const request = require("request");
console.log("Before");

request("https://www.espncricinfo.com/series/ipl-2021-1249214",cb); //Async

function cb(error,response,html){
    if(error){
        console.log("Some error",error);
    }else{
        console.log(html);
    }
}

console.log("After");