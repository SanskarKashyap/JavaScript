let n = prompt("Enter a number");

let a = [];

for (let i = 1; i <= n; i++) {
  a[i] = i;
}

console.log(a);

let sum = a.reduce((res,curr) => res + curr );

console.log("sum :",sum);

let mul = a.reduce((res,curr)=>res*curr);
console.log("factorial : ",mul);