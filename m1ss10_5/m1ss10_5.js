const vndFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND'
});
const vnd = 25000;
let usd = Number(prompt('Input usd amount:'));
let conv = usd * vnd;
console.log(vndFormatter.format(conv));
document.write(vndFormatter.format(conv));