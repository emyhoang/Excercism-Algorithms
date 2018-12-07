// Implement run-length encoding and decoding.
// Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.
// For example we can represent the original 53 characters with only 13.

export const encode = (str) => {
  let cChars = /([\w\s])\1*/g;
  return str.replace(cChars,
    match => (match.length > 1 ? match.length + match[0] : match[0]));
};

export const decode = (encodedText) => {
  let countAndChar = /(\d+)(\w|\s)/g;
  return encodedText.replace(countAndChar,
    (match, repeats, char) => new Array(+repeats + 1).join(char));
};

// Another way to solve:
  // const RLE = {
  //   encode: str => str.replace(/(\w)\1+/g, (m, c) => `${m.length}${c}`),
  //   decode: str => str.replace(/(\d+)(\w)/g, (_, d, c) => c.repeat(d))
  // }
