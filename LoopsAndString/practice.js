let fullName = prompt("Enter your full Name");

// Trim the full name
fullName = fullName.trim();

// Remove spaces and convert to lowercase
let trimmedName = fullName.replace(/\s/g, '').toLowerCase();

// Generate the username
let userName = "@" + trimmedName + trimmedName.length;

alert(userName);
