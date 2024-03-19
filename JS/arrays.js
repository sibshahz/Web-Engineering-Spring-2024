const arr= [1,2,3,4,5,6,7,8];
// single line comment
// arr = [6,8,9]
// you cannot assign new value to constant variable in js using = operator

/**
multiline
comment 
is writtent here
 */

// arr.push(4)
// arr.push("String example")
// arr.push(true)
// arr.push([9,12,15])
// arr.unshift("new element")
// arr.shift();
// const popedValue=arr.pop();
// console.log(arr[4])
// console.log(arr)
// console.log(popedValue)

//for each


arr.forEach((item,index) => {
  if(item % 2 == 0){
    // console.log("Current Item is: ", item);
    // console.log("Current index is: ", index)
  }else{
    return;
  }

});


// map
const evenArray=arr.map((item,index) => {
  if(item % 2 == 0){
    return item;
    console.log("Current Item is: ", item);
    // console.log("Current index is: ", index)
  }
});

// console.log(evenArray)

// filter

const oddArray=arr.filter((item,index) => {
  if(item % 2 == 0){
    return false;
  }else{
    return true;
  }
});
console.log(oddArray);

