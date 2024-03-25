const personSpecial = {
  name: ["Bob", "Smith"],
  age: 32,
  studying: {program: "BS", college: "ANKS"},
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[1]}, and I am a student of ${this.studying.program}.`);
  },
};

personSpecial.introduceSelf();
const azhar=personSpecial;
azhar.name = ["Muhammad", "Azhar"]
azhar.age=20;
azhar.introduceSelf();
azhar.running=() => {
  console.log("Azhar is running");
}
azhar.running=()=> {
  console.log("Azhar is not running")
}
console.log(azhar.age);
azhar.running()