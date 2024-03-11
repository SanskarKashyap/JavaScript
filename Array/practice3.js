let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

console.log(companies);
console.log(companies.toString());

let deleted = companies.pop();
console.log("deleted :",deleted)
console.log(companies);


deleted = companies.shift();
console.log("deleted :",deleted)

companies.splice(2,1,"Ola");
console.log(companies)


companies.push("Amazon")
console.log(companies)