const fs = require("fs");

let studentData="";

// function readFile(callThis){
//   fs.readFile("a.txt","utf8", (err,mydata)=> {
//     if(err){
//       console.log("ERROR OCCURED", err);
//     }else{
//       callThis(mydata)
//     }
//   })
// }

const someVariable="Sflahsfdhal;sfdhlkaakshdfkahsfdkhaslkdf"

async function readFile(){
  return new Promise((resolve,reject) => {
    fs.readFile("a.txt","utf8", (err,mydata)=> {
      if(err){
        reject("SUPER ERROR: ", err);
      }else{
        resolve(mydata)
      }
    })
  }) 
}

readFile().then((data) => {
    console.log(data)

});
// readFile().then((data) => {
//       console.log(data)
//   })
console.log(value);


 
 
  // function callThis(data){
  //   console.log(data);
  // }
  
  // readFile(callThis);



