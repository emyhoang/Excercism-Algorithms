// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
// Write some code to determine whether a number is an Armstrong number.

export const validate = (num) => {
  let digits = num.toString().split('');
  let sum = 0;

  if (digits.length == 1) {
    return true
  }
  if (digits.length == 2) {
    return false;
  }
  for (var i = 0; i < digits.length; i++) {
    digits[i] = Math.pow(digits[i], digits.length);
    sum += digits[i];
    if (sum == num) {
      return true;
    }
  }
  return sum == num;
}