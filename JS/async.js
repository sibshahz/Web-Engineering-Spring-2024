// function fetchData(){
//   console.log("Requesting data from chatgpt server...");

//   setTimeout(()=>{
//     console.log("Data recieved from the ChatGPT server: []");
//   },6000);

// }

// fetchData()

setTimeout(function timeout(){
  console.log("Click the button");
},1000);

//expensive operation (take more than 1s)

let sum = 0;
for(let i=0; i<10000000000; i++){
  sum = sum + 10;
}

