/* Callbacks are the functions that are passed
to some functions to be called when a specific event
happens
*/

// setInterval
// setTimeout(
  
//   ()=>{
//     console.log("Time is up");

//   }
//   , 3000);

function specialCallback(arg){
  console.log("Recieved from doSomething", arg);
}


  function doSomething(arg1,callbackFunc){
    const vari="Special "+arg1;
    let numberofCalls=0;
    setInterval(() => {
      numberofCalls+=1;
      callbackFunc(vari);
    },2000);
    if(numberofCalls > 3){
      clearInterval();
      return true;
    }
  }

  doSomething("student", specialCallback);