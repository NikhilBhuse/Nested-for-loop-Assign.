// Q-1

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
}

// // Q-2

// // 1
// // 2 2 
// // 3 3 3
// // 4 4 4 4
// // 5 5 5 5 5

document.write("<br>")


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i + " ")
    }
    document.write("<br>")
}

// // Q-3

// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1

document.write("<br>")

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
}

// // Q-4

// // 5 5 5 5 5 
// // 4 4 4 4
// // 3 3 3
// // 2 2
// // 1

document.write("<br>")


for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write(i + " ")
    }
    document.write("<br>")
}

document.write("<br>")

// // Q-5

// -  	     1  
//     	   1   2  
//    	 1   2   3  
//     1   2   3   4  
//   1   2   3   4   5  


for (let i = 1; i<=5; i++);
{
    for (let j = 5; j>=i; j--);
    {
        document.write("&nbsp;");
    }
    for(k= 1; k<=i; k++)
    {
        ducument.write(k + " ");
    }

}


// Q-6

// 1
// 2 3 
// 4 5 6
// 7 8 9 10

let count = 1;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(count + " ");
        count++;
    }
    document.write("<br>")
}


//     //  *
//     //  * *
//     //  * * *
//     //  * * * *
//     //  * * * * *

document.write("<br>")


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*&nbsp; &nbsp; &nbsp");
    }
    document.write("<br>");

}

document.write("<br>")

// * * * * * 
// * * * * 
// * * * 
// * * 
// *

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*&nbsp; &nbsp; &nbsp");
    }
    document.write("<br>");
}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < i; j++) {
            document.write("&nbsp;&nbsp;");
        }
        for (let k = i; k < rows; k++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

//         *
//       * *
//     * * *
//   * * * * 
// * * * * *

for (let i = 0; i < 5; i++) {
    // Inner loop for spaces
    for (let j = 5 - i; j > 1; j--) {
        process.stdout.write(" ");
    }
    // Inner loop for stars
    for (let k = 0; k <= i; k++) {
        document.write("* ");
    }
    // Move to the next line after each row
    document.write.write("\n");
}


//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

for (let i = 1; i<= 5; i++) {
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
        }
        for(let l=2; l<=i; l++){
            document.write("*");
            }
            document.write("<br>")
}

// * * * * * * * * *
//   * * * * * * *
// 	   * * * * *
// 	     * * * 
// 	       *

let n = 5;

for (let i = n; i >= 1; i--) {
 
  for (let j = 1; j <= 2 * n; j++){
    document.write("&nbsp&nbsp");
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    document.write(" *");
  }
  document.write("<br>");
}


//             *
//           * * *
//         * * * * *
//       * * * * * * *
//     * * * * * * * * *
//       * * * * * * *
//         * * * * *
//           * * * 
//             *


for(let i=1;i<=n;i++){
    let str = "*";
    let space = ' ';
    document.write("<br>")
    document.write("&nbsp")
    document.write(space.repeat((n-i)) + str.repeat(i *2));
}
for(let i=n-1;i>=1;i--){
    let str ="*";
    let space = ' ';
    document.write("<br>")
    document.write("&nbsp")
    document.write(space.repeat((n-1)) + str.repeat(i*2-1));
}

//     *
//     * *
//     * * *
//     * * * *
//     * * * * *
//     * * * *
//     * * *
//     * *
//     *

for(i=1; i<=10;i++){
    for(j=1; j<=i; j++){
        if (i<=(10/2)){
            document.write(" * ");
        }
    }
    for(k=10; k>i; k--){
        if(i>(10/2)){
            document.write(" * ");
        }
    }   document.write("<br>");
}
