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


// edit a student data

// delete a student data

app.listen(3000);

