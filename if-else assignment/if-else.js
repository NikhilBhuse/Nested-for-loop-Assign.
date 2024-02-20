// Q.1 Check if a number is odd or even in JavaScript. 
    // let a=5; 
    // if(a%2==0) 
    //  { 
    //  console.log("number is even"); 
    //  }else{ 
    //     console.log("number is odd"); 
    //      }

// Q.2 // Find the largest and smallest of two number. 

// let a=2; 
// let b=9;
// if(a<b)
// {
//     console.log("b is greater than a")
// }
// else{
//     console.log("aa is greater than b")
// }

// Q.3 Find the largest and smallest of three number?

// let a=1;
// let b=11;
// let c=10;

// if(a<b&&a<c)
// {
//     console.log("smallest no. is"+c)
// }
// else{
//     console.log("largest no. is"+b)
// }

// Q.4 Check if triangle is equilateral scalene or isosceles.

// let side1= 10;
// let side2= 10;
// let side3= 10;

// if(side!=side2&&side1!=side3&&side2!=side3)
// {
//     console.log("it is scalene triangle");
// }
// else if (side1==side2&&side1==side3&&side2==side3)
// {
//     console.log("it is equilateral triangle");
// }
// else{
//     console.log("it is isosceles triangle");
// }

// Q.5 Find that a given number is present in given range or not?

// let startrange= 0;
// let lastrange= 100;

// let number= 101;

// if(startrange>=number||number<=lastrange)
// {
//     console.log("number is between range");
// }
// else{
//     console.log("number is not in range")
// }


// Q.6 Perform arithmetic operations on two numbers?

// let a=parseInt(prompt("enter a first number")); 
// let b=parseInt(prompt("enter a second no")); 
// let c=parseInt(prompt("enter your choice -] 1.for adition -] 2.for subtraction -] 3.for multiplication -] 4.for divide -] 5.for power -] 6.for modulus")); 
// console.log(c); 
// switch(c) 
// { 
//     case 1:console.log("adition = "+(a+b)); 
//     break; 
//     case 2:console.log("subtraction = "+(a-b)); 
//     break; 
//     case 3:console.log("multiplication = "+(a*b)); 
//     break; 
//     case 4:console.log("divide = "+(a/b)); 
//     break; 
//     case 5:console.log("power = "+(a**b)); 
//     break; 
//     case 6:console.log("modulus = "+(a%b)); 
//     break; 
//     default:console.log("please enter valid choice between (1-6)"); 
//     }

// Q.7 Check if a year is leap year or not? 

// let year=2017; 
// if(year%4==0) 
// { 
//     console.log("it is leap year"); 
//     }else{ 
//         console.log("it is not leap year"); 
//         }

// Q.8 Find the grade for input marks for five subjects?

// let a=parseInt(prompt("enter a number of 1 subject")); 
// let b=parseInt(prompt("enter a number of 2 subject")); 
// let c=parseInt(prompt("enter a number of 3 subject")); 
// let d=parseInt(prompt("enter a number of 4 subject")); 
// let e=parseInt(prompt("enter a number of 5 subject")); 

// let sum=parseFloat((a+b+c+d+e)/500); 
// let perc=parseFloat(sum*100); 
// console.log(perc) 
// if(perc>=90) 
// { 
//     console.log("excellent A grade"+perc); 
//     } 
//     else if(70<=perc>=89) 
//     { 
//         console.log("verygood B grade"+perc) 
//         } 
//         else if(50<=perc>=69) 
//         { 
//             console.log("good C grade"+sum) 
//             } 
//             else if(35<=perc>=49){ 
//                 console.log(" not so good D grade"+perc) 
//                 }else{ 
//                     console.log("sorry you are fail" +perc); 
//                     }


// Q.9 Find number of days in a given month? 

// let year=2016; 
// let month=3; 
// if(year%4==0) 
// { 
//     switch(month) 
//     { 
//         case 1:console.log("january 31"); 
//         break; 
//         case 2:console.log("feb 29 "); 
//         break; 
//         case 3:console.log("march 31"); 
//         break; 
//         case 4:console.log("april 30 "); 
//         break; 
//         case 5:console.log("may 31 "); 
//         break; 
//         case 6:console.log("june 30 "); 
//         break; 
//         case 7:console.log("july 31 "); 
//         break; 
//         case 8:console.log("agust 31 "); 
//         break; 
//         case 9:console.log("sep 30"); 
//         break; 
//         case 10:console.log("oct 31 "); 
//         break; 
//         case 11:console.log("nov 30 "); 
//         break; 
//         case 5:console.log("dec 31 "); 
//         break; 
//         default:console.log("enter vallied no"); 
//         } 
//         } 
//         else 
//         { 
//             switch(month) 
//             { 
//                 case 1:console.log("january 31"); 
//                 break; 
//                 case 2:console.log("feb 28 "); 
//                 break; 
//                 case 3:console.log("march 31"); 
//                 break; 
//                 case 4:console.log("april 30 "); 
//                 break; 
//                 case 5:console.log("may 31 "); 
//                 break; 
//                 case 6:console.log("june 30 "); 
//                 break; 
//                 case 7:console.log("july 31 "); 
//                 break; 
//                 case 8:console.log("agust 31 "); 
//                 break; 
//                 case 9:console.log("sep 30"); 
//                 break; 
//                 case 10:console.log("oct 31 "); 
//                 break; 
//                 case 11:console.log("nov 30 "); 
//                 break; 
//                 case 5:console.log("dec 31 "); 
//                 break; 
//                 default:console.log("enter vallied no"); 
//                 } 
//                 }

// Q.10 Final Result for five subjects (percentage and grading system)?

// let a=parseInt(prompt("enter a number of 1 subject")); 
// let b=parseInt(prompt("enter a number of 2 subject")); 
// let c=parseInt(prompt("enter a number of 3 subject")); 
// let d=parseInt(prompt("enter a number of 4 subject")); 
// let e=parseInt(prompt("enter a number of 5 subject")); 

// let sum=parseFloat((a+b+c+d+e)/500); 
// let perc=parseFloat(sum*100); 
// console.log(perc) 
// if(perc>=90) 
// { 
//     console.log("excellent A grade"+perc); 
//     } 
//     else if(70<=perc>=89) 
//     { 
//         console.log("verygood B grade"+perc) 
//         } 
//         else if(50<=perc>=69) 
//         { 
//             console.log("good C grade"+sum) 
//             } 
//             else if(35<=perc>=49){ 
//                 console.log(" not so good D grade"+perc) 
//                 }else{ 
//                     console.log("sorry you are fail" +perc); 
//                     }

// Q.11 check whether the number is positive, negative or zero? 

// let num=-10; 
// if(num<0) 
// { 
//     console.log("it is negative nuumber") 
//     }else if(num>0) 
//     { 
//         console.log("its positive number"); 
//         }else{ 
//             console.log("its 0"); 
//             }

// Q.12 Check if input variable is a number or not (you can use isNaN() method in the conditions) 

// let num=90; 
// var num1 = "ok"; 
// if(isNaN(num1)){ 
//     console.log(num1 + " is not a number "); 
//     }else{ 
//         console.log(num1 + " is a number"); 
//         }

// Q.13 Write a JavaScript program to check if a number is divisible by 3, 5, or 7. 

// let num=90; 
// if(num%3==0) 
// { 
//     console.log("number is divisble by 3"); 
//     }else if(num%5==0) 
//     { 
//         console.log("number is divisible by 5"); 
//         }else if(num%7==0) 
//         { 
//             console.log("number is divisble by 7") 
//             }

// Q.14 sort two numbers 

// let num1=67; 
// let num2=90;
// if(num1<num2)
// {
//     console.log(num1,num2);
// }
// else{
//     console.log(num2,num1)
// }

// Q.15 Sort three number 

// let num1=67; 
// let num2=90;
// let num3=78;

// if(num1<num2<num3)
// {
//     console.log(num1,num2,num3);
// }
// else if(num2<num1<num3)
// {
//     console.log(num2,num1,num3);
// }
// else if(num3<num2<num1)
// {
//     console.log(num3,num2,num1);
// }
// else
// {
//     console.log(num3,num1,num2);
// }