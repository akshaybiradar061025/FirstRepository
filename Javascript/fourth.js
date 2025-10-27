// 16/10
// let num = [1, 2, 5, 79, 60]

// console.log(num.sort((a, b) => a - b));

// let num = [1, 2, 5, 79, 60]

// console.log(num.join("->"));

// let arr = [ " banana " , " apple " , " mango ", " orange "]

// console.log(arr.join(""));

// let student = {
//     name: "Akshay",
//     age: 20,
//     address: "Bangalore"
// }
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.address);

// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["address"]);

// console.log(student.name);
// student.name = "Rohan";
// console.log(student.name);

// let student = {
//     name: "Akshay",
//     age: 20,
//     address: "Bangalore"
// }
// delete student.address
// console.log(student);

// how to copy the object

// spreading operator
// let student01 = {
//     name: "Akshay",
//     age: 20,
//     address: "Bangalore"
// }

// let student02 = student01;

// let student03 = {...student02}

// console.log(student03)

// shallow copy
// let student = {
//     name: "Akshay",
//     age: 25,
//     address: "Bangalore",
//     marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//         grade: {
//             maths: "A"
//         }
//     }
// }
// // console.log(student.marks.maths);
// // console.log(student.marks.grade);

// const shallow = {...student};

// // console.log(shallow);
// shallow.name = "Rohan";
// // const shallowname = shallow.name;
// // const originalname = student.name;

// console.log(shallow.name);
// console.log(student.name);

// let student = {
//     name: "Akshay",
//     age: 25,
//     address: "Bangalore",
//     marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//         grade: {
//             maths: "A"
//         }
//     }
// }

// const shallow = {...student};

// shallow.marks.maths = 90;

// console.log("shallow copy---", shallow);
// console.log("original copy----", student);

// 17/10

// let student = {
//     name: "Akshay",
//     age: 25,
//     address: "Bangalore",
//     marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//     }
// }

// const shallow = {...student}

// shallow.marks.maths = 90;
// shallow.name = "Rohan";

// console.log("original---",student);
// console.log("shallowcopy---",shallow);

// const person01 = {
//     name: "Akshay",
//     address: {
//         city: "Bangalore",
//         pin: 560010
//     }
// }
// const shallowCopy = {...person01};
// shallowCopy.name = "Rohan";
// shallowCopy.address.city = "Bidar";
// console.log("original---",person01);
// console.log("shallowcopy---",shallowCopy);
// console.log(person01.address.city);
// console.log(shallowCopy.address.city);

// const person02 = {
//     name: "Rohan",
//     address: {
//         city: "Bangalore",
//         pin: 560010
//     }
// }

// const deepCopy = JSON.parse(JSON.stringify(person02));
// deepCopy.address.city = "Bidar";
// console.log(person02.address.city);
// console.log(deepCopy.address.city);

// let student01 = {
//     name: "Akshay",
//     class: "10",
//     marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//     }
// }

// let student02 = {...student01}
// let student03 = {...student01}

// student02.name = "Rohan"
// student02.marks.maths = 90
// student03.marks.science = 80

// console.log(student01);
// console.log(student02);
// console.log(student03);

// deep copy

// let student01 = {
//     name: "Akshay",
//     class: "10",
//     marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//     }
// }

// let student02 = JSON.parse(JSON.stringify(student01))
// // let student02 = structuredClone(student01)

// student02.marks.maths = 90

// console.log(student01);
// console.log(student02);

// let student01 = {
//     name: "Akshay",
//     class: "12"
// }

// let student02 = {...student01}

// student02.name = "Rohan"

// if(student01.name !== student02.name){
//     student01.name = student02.name;
// }

// console.log(student01);
// console.log(student02);

// freeze method in object

// let student01 = {
//     name: "Akshay",
//     class: "10"
// }
// Object.freeze(student01);

// student01.name = "Rohan"

// console.log(student01);

// seal method of object

// let student01 = {
//     name: "Akshay",
//     class: "10"
// }
// Object.seal(student01);

// student01.name = "Rohan"
// student01.address = "Bangalore"

// console.log(student01);

// let student01 = {
//     name: "Akshay",
//     class: "10"
// }
// let keys = Object.keys(student01)
// console.log(keys);

// let student01 = {
//     name: "Akshay",
//     class: "10"
// }
// let values = Object.values(student01)
// console.log(values);

// let student01 = {
//     name: "Akshay",
//     class: "10"
// }
// let entries = Object.entries(student01)
// console.log(entries);

// let student01 = {
//      name: "Akshay",
//      class: "10",
//      address: "Bangalore",
//      rollNumber: 6,
// }

// for(let key in student01){
//    console.log(`this is ${key} of student: ${student01[key]}`);
// }

// let student01 = {
//      name: "Akshay",
//      class: "10",
//      address: "Bangalore",
//      rollNumber: 6,
//      marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//      }
// }

// // for(let key in student01){
// //    console.log(`this is ${key} of student: ${student01[key]}`);
// // }
// //   this above thing will not get the nested part so we will

// for(let key in student01.marks){
//     console.log(`this is ${key} marks of student01: ${student01.marks[key]}`);
// }

// let student01 = {
//      name: "Akshay",
//      class: "10",
//      address: "Bangalore",
//      rollNumber: 6,
//      marks: {
//         maths: 100,
//         science: 90,
//         social: 80,
//         english: 90,
//      }
// }

// // for(let key in student01){
// //    console.log(`this is ${key} of student: ${student01[key]}`);
// // }
// //   this above thing will not get the nested part so we will

// // for(let key in student01.marks){
// //     console.log(`this is ${key} marks of student01: ${student01.marks[key]}`);
// // }

// console.log(typeof student01);
// console.log(typeof student01.name);
// console.log(typeof student01.marks);

// 21/10
// let student = {
//     name: "Akshay",
//     class: "10",
//     address: "bangalore",
//     rollNo:
// }

// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,

// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,

// }
// ]
// student.map((oneStu) => {
//     console.log(oneStu)
// })

// array of object total marks=20
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]
// student.map((a) => {
//     console.log(a)
// })
// let bonusMarks = student.map((a) => {
//     return a.testmarks + 5
// })
// console.log(bonusMarks);

// only names in array
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let names = student.map((s) => s.name)
// console.log(names);

// to write the names in uppercase
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let names = student.map((s) => s.name.toUpperCase())
// console.log(names);

// to update the marks
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]
// let updatedMarks = student.map((s) => ({...s, testmarks: s.testmarks + 5}))
// console.log(updatedMarks);

//
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let summary = student.map((s) => `${s.name} has scored ${s.testmarks} marks`)
// console.log(summary);

// Assignment --print only the roll numbers of all students using map()
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let rollNumbers = student.map((s) => s.rollNo)
// console.log(rollNumbers);

// 2 create an array of student addresses
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let addresses = student.map((s) => s.address)
// console.log(addresses);

// 3 make an array that shows "Name: RollNumber" format for each student
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 15,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 12,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 10,
// }
// ]

// let nameRollNo = student.map((s) => `${s.name}: ${s.rollNo}`);
// console.log(nameRollNo);

// 4 create a new array of all students with testMarks converted to percentages (out of 100)
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 80,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 90,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 75,
// }
// ]

// let markstoPercent = student.map((s) => ({...s, testmarks: (s.testmarks / 100) * 100}))
// console.log(markstoPercent);

// 5 make a new array of all student names in lowercase
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 80,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 90,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 75,
// }
// ]

// let names = student.map((s) => s.name.toLowerCase())
// console.log(names);

// 22/10
// filter concept

// let clothes = [
//     {
//         brand: "zara",
//         price: 600,
//         color: "white",
//         size: "XL",

//     },
//     {
//         brand: "levis",
//         price: 700,
//         color: "black",
//         size: "L",
//     },
//     {
//         brand: "puma",
//         price: 800,
//         color: "red",
//         size: "XL",
//     }
// ]
// let size = clothes.filter((c) => c.size === "XL" && c.brand === "puma")
// console.log(size);

// let clothes = [
//     {
//         brand: "zara",
//         price: 560,
//         color: "white",
//         size: "XL",

//     },
//     {
//         brand: "levis",
//         price: 700,
//         color: "black",
//         size: "L",
//     },
//     {
//         brand: "puma",
//         price: 800,
//         color: "red",
//         size: "XL",
//     },
//     {
//         brand: "nike",
//         price: 550,
//         color: "red",
//         size: "XL",
//     },
//     {
//         brand: "zudio",
//         price: 580,
//         color: "red",
//         size: "XL",
//     },

// ]
// let pricelessThan600 = clothes.filter((c) => c.price < 600).map((c) => c.brand)
// console.log(pricelessThan600);

// let clothes = [
//     {
//         brand: "zara",
//         price: 560,
//         color: "white",
//         size: "XL",

//     },
//     {
//         brand: "levis",
//         price: 700,
//         color: "black",
//         size: "L",
//     },
//     {
//         brand: "puma",
//         price: 800,
//         color: "red",
//         size: "XL",
//     },
//     {
//         brand: "nike",
//         price: 550,
//         color: "red",
//         size: "XL",
//     },
//     {
//         brand: "zudio",
//         price: 580,
//         color: "red",
//         size: "XL",
//     },

// ]
// let pricelessThan600 = clothes.filter((c) => c.price < 600)
// console.log(pricelessThan600);

// for stack explanation
// function add(a, b){
//     return a + b
// }

// function sub (a, b){
//     return a - b
// }
// console.log(add(10,20))
// console.log(sub(10,20))

// Assignment 22/10
// let students = [
//   {
//     name: "Avinash",
//     age: 20,
//     grade: "A",
//     city: "Bangalore",
//     fees: 12000,
//   },
//   {
//     name: "Ramesh",
//     age: 22,
//     grade: "B",
//     city: "Mumbai",
//     fees: 8000,
//   },
//   {
//     name: "Suresh",
//     age: 19,
//     grade: "C",
//     city: "Delhi",
//     fees: 5000,
//   },
//   {
//     name: "Mahesh",
//     age: 21,
//     grade: "A",
//     city: "Bangalore",
//     fees: 15000,
//   },
//   {
//     name: "Naresh",
//     age: 23,
//     grade: "B",
//     city: "Hyderabad",
//     fees: 9000,
//   },
//   {
//     name: "Divya",
//     age: 20,
//     grade: "A",
//     city: "Pune",
//     fees: 11000,
//   },
//   {
//     name: "Priya",
//     age: 19,
//     grade: "C",
//     city: "Bangalore",
//     fees: 4000,
//   },
//   {
//     name: "Ravi",
//     age: 22,
//     grade: "B",
//     city: "Delhi",
//     fees: 9500,
//   },
//   {
//     name: "Tejas",
//     age: 18,
//     grade: "A",
//     city: "Mumbai",
//     fees: 10000,
//   }
// ];

// // 1 get all students from bangalore
// let studentsBangalore = students.filter((s) => s.city === "Bangalore");
// console.log(studentsBangalore);

// // 2 get all students who have grade "A"
// let studentsGrade = students.filter((s) => s.grade === "A")
// console.log(studentsGrade);

// // 3 get all students with fees less than 10000
// let studentFees = students.filter((s) => s.fees < 10000)
// console.log(studentFees);

// // 4 get all students whose age is above 21
// let studentsAge = students.filter((s) => s.sge > 21)
// console.log(studentsAge);

// // 5 get all students from mumbai with grade "B"
// let studentsGradeMumbai = students.filter((s) => s.city === "Mumbai" && s.grade === "B")
// console.log(studentsGradeMumbai);

// // 6 get all students who are grade "A" and pay fees more than 10000
// let studentsGradeFeesMore = students.filter((s) => s.grade === "A" && s.fees > 10000)
// console.log(studentsGradeFeesMore);

// // 7 get all students who are not from delhi
// let studentsNotDelhi = students.filter((s) => s.city !== "Delhi")
// console.log(studentsNotDelhi);

// // 8 get all students with grade "C" and fees less than 6000
// let studentsGradeFeesLess = students.filter((s) => s.grade === "C" && s.fees < 6000)
// console.log(studentsGradeFeesLess);

// // 9 get all students whose name starts with "R"
// let studentsNameR = students.filter((s) => s.name.startsWith("R"))
// console.log(studentsNameR);

// // 10 get all students who are either from bangalore or pune
// let studentsBangoloreOrPune = students.filter((s) => s.city === "Bangalore" || s.city === "Pune")
// console.log(studentsBangoloreOrPune);

// // 11 get only the names of students whose fees are more than 9000
// let studentsFeesMore = students.filter((s) => s.fees > 9000).map((s) => s.name)
// console.log(studentsFeesMore);

// // 12 get an array of names of "A" grade students
// let studentsGradeNames = students.filter((s) => s.grade === "A").map((s) => s.name)
// console.log(studentsGradeNames);

// // 13 get an array of cities where students have grade "B"
// let studentsGradeCities = students.filter((s) => s.grade === "B").map((s) => s.city)
// console.log(studentsGradeCities);

// // 14 get the names and fees of students from bangalore
// let studentsNamesFees = students.filter((s) => s.city === "Bangalore").map((s) => ({name:s.name , fees:s.fees}))
// console.log(studentsNamesFees);

// // 15 create an array of strings like "Avinash - A - 12000" for all students
// let studentsNGF = students.filter((s) => s.name + " - " + s.grade + " - " + s.fees)
// console.log(studentsNGF);


// Assignment 23/10
// let student = [
//      {
//     name: "Akshay",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 6,
//     testmarks: 80,

// },
//     {
//     name: "Mahesh",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 7,
//     testmarks: 90,
// },
//  {
//     name: "Rohan",
//     class: "10",
//     address: "Bangalore",
//     rollNo: 8,
//     testmarks: 75,
// }
// ]

// let sum = student.reduce((sum, s) => sum + s.testmarks, 0)
// console.log(sum);


// assignment 2
let students = [
  {
    name: "Avinash",
    class: "10",
    address: "Bangalore",
    rollNumber: 1,
    testMarks: 8
  },
  {
    name: "Ramesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 2,
    testMarks: 12
  },
  {
    name: "Suresh",
    class: "10",
    address: "Bangalore",
    rollNumber: 3,
    testMarks: 9
  },
  {
    name: "Mahesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 4,
    testMarks: 15
  },
  {
    name: "Lokesh",
    class: "10",
    address: "Bangalore",
    rollNumber: 5,
    testMarks: 7
  }
];

// 1 print only the names of all students using forEach()
// let namesofAll = students.forEach((s) => {
//   console.log(namesofAll);
// })

// 2 create a new array containing only  students roll numbers using map()
let studentsRollNumbers = students.map((s) => s.rollNumber)
console.log(studentsRollNumbers);

// 3 create a new array where eacj students testmarks are increased by 5 (without modifying the original array)
let studentsMarksIncrease = students.map((s) => ({...s, testMarks: s.testMarks + 5}))
console.log(studentsMarksIncrease);

// 4 find the total marks of all students using reduce()
let studentsTotalMarks = students.reduce((sum, s) => sum + s.testmarks, 0)
console.log(studentsTotalMarks);

// 5 find the average marks of all students using reduce()
// let studentsAverageMarks = 

// 6 using foreach ,print Avinash scored 8 marks ramesh scored 12 marks suresh scored 9 marks
students.forEach(({name, testMarks}) => {
  console.log(`${name} scored ${testMarks} marks`)
});

// 7 using map() ,return an array of objects with a new key result


// 8 find the highest testmarks using reduce()


// 9 find the lowest testmarks using reduce()

// 10 count how many students passed and how many failed using reduce ()

