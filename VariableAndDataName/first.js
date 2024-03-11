console.log("Sanskar");

console.log(1);

fullname = "Sanskar Kashyap";
console.log(fullname);

x = null;
y = undefined;

console.log(x);
console.log(y);

/* 
    variable name is case sensetive ex:-  Variable1 != variable1
    reserved word cant be veriable name 
    special character cant be used in variable name except _ and $
*/

/* 
 3 types of veriables

    1. var  - globe scope , that can be redeclared and updated (sequrity issue) 2015 
    2. let  - block scope , that can not be redeclared but can be updated
    3. const  - block scope , that can not be redeclared and updated


  types of dataTypes
    1. Primitive data types (7) ---> string, number, boolean, null, undefined, symbol, bigint
    2. non-Primitive data types (object) ---> object is collection of key value pair
*/
const student = {
  name: "Sanskar",
  age: 21,
  rollNo: 12,
};

console.log(student);

// update the value in the object (although it is const but we can update the value of the object)

student.age = student.age + 1;

console.log(student.age);

const Product = {
  name: "Laptop",
  price: 50000,
  rating: 4.5,
  offer: true,
  MRP: 60000,
  brand: "HP",
};

console.log(Product);

//string

let var1 = "abc" + 123;
console.log(var1);
var1 = "123" + 123;
console.log(var1);

//number

let var2 = 123 + 123;
console.log(var2);
