let marks = [89,96,94,92,93,98,82,84,99,60]

let sum = 0 ;

for (let mark of marks)
{
    sum = sum + mark;
}

console.log("Average : ",sum/marks.length)