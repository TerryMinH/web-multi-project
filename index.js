function addBigNumbers(a, b) {
  a = a.toString();
  b = b.toString();
  let maxlength = Math.max(a.length, b.length);
  a = a.padStart(maxlength,'0');
  b = b.padStart(maxlength,'0');
  let carry = 0,
    result = "";
  for (let i = maxlength - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
}
console.log(addBigNumbers(99, 4));
