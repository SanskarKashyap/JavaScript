// sum of n numbers

let n = 111
let sum = 0
// for loop 
for (let i = 1; i <= n; i++) {
    sum += i
}   
console.log(sum) 


// infinite loop can crash system 

// example of infinite loop
// for (let i = 1; i <= 10; i--) {
//     console.log(i)
// }

// while loop
 let m = 10 ;

 while (m > 0) {
     console.log(m)
     m--
 }

 // do while loop
 do {
        console.log(m)
        m++
 }while (m < 10)


 // for of loop  ---> for accessing the value/character of array/string 

 let str = "Sanskar"
 
    for (let i of str) {
        console.log("i = ", i);
    }

// for in loop --> for acesseing the key value pain in object 

let student = {
    name: "Sanskar",
    age: 20,
    cgpa: 8.5,
    isPass: true 
}

for (let key in student) {
    console.log(key, student[key])
}

for(let i = 0; i <= 100; i++) {
    if (i%2 === 0) {
        console.log("num = ",i);
    }
    
}