const regex = /\d{3}-\d{2}-\d{4}/;
const text = "My SSN is 123-45-6789";
const match = regex.test(text);
console.log(match); // Outputs: ["123-45-6789"]
