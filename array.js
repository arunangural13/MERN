// const okay= ["arun","robo","danesh"] 
// okay.pop()
// console.log(okay)

// ---------------------


// const y=["hello", "how", "are", "you"]
// y.unshift("robo")
// console.log(y)

// -----------------------------
// const y=["hello", "how", "are", "you"]
// y.shift()
// console.log(y)

// -----------------------------

// const y=["hello", "how", "are", "you"]
// y.push("robo")
// console.log(y)


// const y=["hello", "how", "are", "you"]
// y[2]="heee";
// console.log(y)

// ---------------------------

// let w=["1","2","3","4","5","6","7"];

// console.log(w.length)
// w.splice(0,2);
// console.log(w)

//=================================



let student=[
{
    name:'Arun',
    Class:'btech',
    roll_no :'213',
    address:'Pathankot'},

   
  {  name:'Arun',
    Class:'btech',
    roll_no :'213',
    address:'Pathankot'
},
  {  name:'Arun',
    Class:'btech',
    roll_no :'213',
    address:'Pathankot'
}

]
for ( let i=0;i<student.length;i++)
console.log(student[i].address)

for (let i of student){
    console.log(i)
}  

for (let i in student){
    console.log(i)
}



