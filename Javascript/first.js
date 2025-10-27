// let a = 10;
// console.log(a);

// let a = 10;
// let b = 15;
// let c = a + b;
// console.log(c);

// let a = 5;
// let b = 2;
// let c = a * b;
// console.log(c);


// let a = 5;
// let b = 2;
// let c = a - b;
// console.log(c);


// let a = 2;
// let b = 3;
// let c = a ** b;
// console.log(c);


// let a = 10;
// let b = 2;
// let c = a % b;
// console.log(c);


// let a = 20;
// let b = 9;
// let c = a / b;
// console.log(c);


// let a = 5;
// let b = 2;
// let c = a * b;
// console.log(c);
// console.log(a++);
// console.log(++a);

// let a = 5;
// let b = 2;
// let c = a * b;
// console.log(c);
// console.log(a--);
// console.log(--a);

// let a = 5;
// let b = 2;
// console.log(a==b);

// let a = 8;
// let b = 8;
// console.log(a===b);

// let a = 5;
// let b = "5";
// console.log(a===b);

// let a = 5;
// let b = 2;
// console.log(a!=b);

// let a = 5;
// let b = "5";
// console.log(a!==b);

// let a = 5;
// let b = 2;
// console.log(a>b);

// let a = 15;
// let b = 12;
// console.log(a<b);

// let a = 5;
// let b = 2;
// console.log(a>=b);

// let a = 15;
// let b = 12;
// console.log(a<=b);

// let age = 20;
// if(age>=18){
//     console.log(age);
// }

// let age = 20;
// if(age>=18){
//     console.log("able to vote");
// }else{
//     console.log("not able to vote")
// }

// let marks = 60;
// if(marks <= 20){
//     console.log("marks are less");
// }else if(marks >= 30 && marks <= 50){
//     console.log("marks are moderate");
// }else{
//     console.log("marks are good")
// }

// let marks = 75;
// console.log(marks>=50? "Grade A" : "Grade B") ;

// let marks = 80;
// console.log(marks >= 90 ? "Grade A" : marks >= 75 ? "Grade B" : marks >= 50 ? "Grade C" : "Fail");


// let num = 20;
// if(num > 0){
//     console.log(num + " is positive");
// }else if(num < 0){
//     console.log(num + " is negative");
// }else {
//     console.log(num + " is zero");
// }

// let num = 20;
// if(num % 5 == 0){
//     console.log(num + " is divisible by 5");
// }else {
//     console.log(num + " is not divisible by 5");
// }


// let fValue = 10;
// let sValue = 20;

// if(fValue == sValue){
//     console.log("Both values are equal");
// }else{
//     console.log("Values are not equal");
// }

// let fValue = 10;
// let sValue = 20;

// if(fValue === sValue){
//     console.log("Both values are equal");
// }else{
//     console.log("Values are not equal");
// }

// let fValue = 10;
// let sValue = 5;

// if(fValue > sValue){
//     console.log(fValue +" is greater than " + sValue);
// }else if(fValue < sValue){
//     console.log(fValue +" is lesser than " + sValue);
// }else {
//     console.log(fValue +" is equal to " + sValue);
// }


// let day = 0;

// switch(day){
//     case 0 :
//         day = "Sunday";
//         break;
//     case 1 :
//         day = "Monday";
//         break;
//     case 2 :
//         day = "Tuesday";
//         break;
//     case 3 :
//         day = "Wednesday";
//         break;
//     case 4 :
//         day = "Thursday";
//         break;
//     case 5 :
//         day = "Friday";
//         break;
//     case 6 :
//         day = "Saturday";
//         break;   
// }
// console.log(day);

// function person(age){
//     if(age < 13){
//         console.log(age + " is Child");
//     }else if(age >= 13 && age <=19){
//         console.log(age + " is Teen");
//     }else if(age >= 20 && age <=59){
//         console.log(age + " is Adult");
//     }else{
//         console.log(age + " is Senior");
//     }
// }
// person(10);
// person(16);
// person(25);
// person(65);
// person(5);
// person(33);

// function number(num){
//     if(num % 3 === 0){
//         console.log(num + " is divisible by 3");
//     }else if(num % 5 === 0){
//         console.log(num + " is divisible by 5");
//     }else if(num % 3 === 0 && num % 5 === 0){
//         console.log(num + " is divisible by both 3 and 5");
//     }else{
//         console.log(num + " is neither divisible by 3 or 5");
//     }
// }
// number(3);
// number(5);
// number(15);
// number(8);
// number(10);
// number(7);

// function number(num){
//     if(num > 0){
//         console.log(num + " is positive.");
//     }else if(num < 0){
//         console.log(num + " is negative.");
//     }else{
//         console.log(num + " is zero.");
//     }
// }
// number(10);
// number(-12);
// number(15);
// number(0);
// number(20);

// function evenOrOdd(num){
//     if(num % 2 === 0){
//         console.log(num + " is even.");
//     }else{
//         console.log(num + " is odd.");
//     }
// }
// evenOrOdd(10);
// evenOrOdd(19);
// evenOrOdd(23);
// evenOrOdd(34);
// evenOrOdd(17);


// function grade(marks){
//     if(marks >= 90){
//         console.log(marks + " comes under Grade-A");
//     }else if(marks >= 80){
//         console.log(marks + " comes under Grade-B"); 
//     }else if(marks >= 70){
//         console.log(marks + " comes under Grade-C");
//     }else if(marks >= 60){
//         console.log(marks + " comes under Grade-D");
//     }else if(marks >= 50){
//         console.log(marks + " comes under Grade-E");
//     }else{
//         console.log(marks + " comes under Grade-F");
//     }
// }
// grade(95);
// grade(83);
// grade(71);
// grade(67);
// grade(59);
// grade(43);

// function max(num1,num2){
//     if(num1 > num2){
//         console.log(" num1 " + num1 + " is the larger one ");
//     }else if(num2 > num1){
//         console.log(" num2 " + num2 + " is the larger one ");
//     }else{
//         console.log(" both numbers are equal ");
//     }
// }

// max(10,20);
// max(15,8);
// max(18,26);
// max(36,20);
// max(10,10);

// function typeOfTriangle(a1, a2, a3){
//     if(a1 + a2 + a3 === 180){
//         if(a1 == 90 || a2 == 90 || a3 == 90){
//         console.log("It is Right Triangle");
//     }else if(a1 < 90 && a2 < 90 && a3 < 90){
//         console.log("It is Acute Triangle");
//     }else if(a1 > 90 || a2 > 90 || a3 > 90){
//         console.log("It is Obtuse Triangle");
//     }
//     }
//     else{
//         console.log("It is Invalid Triangle");
//     }
// }

// typeOfTriangle(60, 60, 60);
// typeOfTriangle(90, 45, 45);
// typeOfTriangle(100, 40, 40);
// typeOfTriangle(0, 90, 90);
// typeOfTriangle(60, 60, 70);


// function temperature(temp){
//     if(temp >= 40){
//         console.log(temp + " Heatwave warning ");
//     }else if(temp >= 30 && temp <=39){
//         console.log(temp + " Hot ");
//     }else if(temp >= 20 && temp <=29){
//         console.log(temp + " Normal ");
//     }else if(temp >= 10 && temp <= 19){
//         console.log(temp + " Cold ");
//     }else if(temp <10){
//         console.log(temp + " Freezing ");
//     }
// }

// temperature(45);
// temperature(35);
// temperature(26);
// temperature(17);
// temperature(9);

// function discount(amount){
//     if(amount > 5000){
//         console.log(" On Shopping of " + amount + " you will get 20% discount");
//     }else if(amount >= 3000 && amount <= 5000){
//         console.log(" On Shopping of " + amount + " you will get 10% discount");
//     }else if(amount >= 1000 && amount <= 2999){
//         console.log(" On Shopping of " + amount + " you will get 5% discount");
//     }else if(amount < 1000){
//         console.log(" On Shopping of " + amount + " you will not get any discount");
//     }
// }

// discount(5500);
// discount(4000);
// discount(2500);
// discount(999);

// 22/10
// Alphabet Checker
// function checkLetter(letter){
//     if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//         console.log(letter + " is Vowel ");
//     }else {
//         console.log(letter + " is Consonant ");
//     }
// }

// checkLetter("a");
// checkLetter("b");
// checkLetter("e");
// checkLetter("c");
// checkLetter("i");
// checkLetter("d");
// checkLetter("o");
// checkLetter("f");
// checkLetter("u");
// checkLetter("g");


// 24/10

// for loop 
// for (let i = 1; i <= 10; i++){
//     console.log(2 * i);
// }

// for(let i = 5; i >= 1; i--){
//     console.log(2 * i);
// }

// 
// for(let i = 1; i <= 10; i++){
//     console.log(" 2 * " + i + " = " + (2 * i));
// }

// 
// for(let i = 1; i <= 10; i++){
//     if( i % 1 == 0){
//         console.log(" 2 * " + i + " = " + (2 * i));
//     }
// }

// 
for(let i = 1; i <= 10; i++){
    if( i % 2 == 0){
        console.log(" 2 * " + i + " = " + (2 * i));
    }
}

