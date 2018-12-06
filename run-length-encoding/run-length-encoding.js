// Implement run-length encoding and decoding.
// Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.
// For example we can represent the original 53 characters with only 13.

export const encode = (str) => {
  let consecutiveChars = /([a-zA-Z])\1*/g;
  return str.replace(consecutiveChars,
    match => (match.length > 1 ? match.length + match[0] : match[0]));
};


export const decode = (encodedText) => {
};