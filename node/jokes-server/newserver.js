const express = require('express');

const app = express();

app.use(express.json());

let studentData=['student one', 'student two', 'student three'];

// get data of all students
app.get('/', (req,res) => {
  res.status(200);
  return res.json(studentData);
})



// get data of a student at specific index
app.get('/:id', (req,res) => {
  //use of query parameters
  const id = req.params.id;
  if(id > studentData.length){
    res.status(404);
    return res.send("Data not found")
  }
  return res.json(studentData[id]);
})

// add new student
app.post('/', (req,res) => {
  const randomName = req.body.studentName;
  studentData.push(randomName);
  return res.status(200).send(randomName)
})

app.put('/:id', (req,res)=>{
  const newData= req.body.studentName;
  const id = req.params.id;

})
// edit a student data
//user will send index of name to be changed in req.param 
// and new data in req.body
//you have to change name at the specified index and return modified data
// array looping 
// accessing element at index 
// modifying data at a index


// delete a student data
app.delete('/:id', (req,res) => {
  const id = req.params.id;
  let deletedStudent='';
  studentData= studentData.filter((item, index) => {
    if(index == id){
      deletedStudent=studentData[index]
    }
    return index !== id;
  })
  return res.json("Student deleted");
})
// user will send index of name to be removed / deleted req.param
// you have to delete that index name from array studetData
// array.filter  studentData
app.listen(3000);