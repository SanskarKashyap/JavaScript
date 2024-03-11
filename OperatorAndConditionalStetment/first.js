// Aetimetic Operation

let a = 10;
let b = 20;

console.log("a = ", a, " b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

//Unery Operator -- Increament / Decrement

console.log("a = ", a, "& a++ = ", a++);
console.log("a = ", a); // affect of post increment ocures in next line

console.log("b = ", b, "& ++b = ", ++b); // effect of pre increment

// Assignment Operator

//  = += -= *= %= **=
console.log("a = ", a);
console.log("a += 5", (a += 5));

// Comparison Operator
// equal to ==
// not equal to !=
// Equal to & type ===              (Strict == )
// Not Qual to & type !==           (Strict != )
// less then more then >=, =<

console.log("a == b", a == b);

//logical Operator

// logical AND &&   (T && T -> T , T && F -> F)
// logical OR || (T || F -> T )
// logical NOT !

console.log("6 < 5 ", 6 < 5);
console.log("!(6 < 5) ", !(6 < 5));

// If Stetment 
mode = "pink" ; 
let colour ;
if (mode === "dark")
{
    colour= "black"
    console.log(colour);
}
else if(mode==="pink")
{
    colour = "DarkBlack"
    console.log(colour);
}
else
{
    colour = "white"
    console.log(colour);
}


// Ternary Operator 

// condition ? trueOutput:falseOutput 
let age = 20;
age >18 ? console.log("You are eligible for voting") : console.log("You are not eligible for voting");

// Switch Case
expr = "Mangoes";

switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  
  console.log("Is there anything else you'd like?");

//   alert("hello");