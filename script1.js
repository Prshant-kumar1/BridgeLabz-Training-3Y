function student(id,name,marks){
    this.id=id;
    this.name=name;
    this.marks=marks;
}

let s1 = new student(1,"John",85);
let s2 = new student(2,"Alice",90);
console.log(s1);
console.log(s2);

let studentArr = [
    {
        id:101,
        name:"John",
        marks:85,
        gender:"Male"
    },
    {
        id:102,
        name:"Alice",
        marks:90,
        gender:"Female"
    },
    {
        id:103,
        name:"Bob",
        marks:75,
        gender:"Male"
    },
    {
        id:104,
        name:"Eve",
        marks:95,
        gender:"Female"
    },
    {
        id:105,
        name:"Charlie",
        marks:80,
        gender:"Male"
    }
]

let names = studentArr.map(function(student){
    return student.name;
});

console.log(names);

let studentData = {id:101,name:"John",marks:85,gender:"Male"}

//object => JSON
let jasonData = JSON.stringify(studentData);
console.log(jasonData);

//json => object
let objData = JSON.parse(jasonData);
console.log(objData);