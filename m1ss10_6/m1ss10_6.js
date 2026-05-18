let math = Number(prompt('Input Math Score:'));
let physics = Number(prompt('Input Physics Score:'));
let chemistry = Number(prompt('Input Chemistry Score:'));
let overall = math + physics + chemistry;
let gpa = overall / 3;
console.log(`Grade Point Average: ${gpa}`);
document.write(`Grade Point Average: ${gpa}`);