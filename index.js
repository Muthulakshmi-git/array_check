const prompt = require("prompt-sync")();     

var cricketPlayers = ["Dhoni","Sachin","Virat","Boomrah"]

var names = prompt("Enter a name : ")
if(!cricketPlayers.includes(names))
{
    cricketPlayers.push(names); 
}
else
{
    console.log("Its already exist")
}

cricketPlayers.sort()
console.log("Alphabetical order : " +cricketPlayers);
console.log("Length of array : "+cricketPlayers.length);


