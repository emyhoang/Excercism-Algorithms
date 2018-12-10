// Write a function to convert from normal numbers 
// to Roman Numerals.
export const toRoman = (num) => {
  let map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  num = num.toString().split('');
  let result = '';
  for (let i = num.length - 1, bit = 1; i >= 0; i-- , bit *= 10) {
    let digit = parseInt(num[i]);
    let basePrev = '';
    let baseCurr = map[5 * bit];
    if (digit > 5) {
      basePrev = map[5 * bit];
      baseCurr = map[10 * bit];
      digit = digit % 5;
    } else if (digit === 5) {
      result = map[5 * bit] + result;
    }
    switch (digit) {
      case 1: result = basePrev + map[1 * bit] + result;
        break;
      case 2: result = basePrev + map[1 * bit].repeat(2) + result;
        break;
      case 3: result = basePrev + map[1 * bit].repeat(3) + result;
        break;
      case 4: result = map[1 * bit] + baseCurr + result;
    }
  }
  return result;
}