// Extract some scrabble scores from a legacy system, transform and load to a new system.

const transform = (input) => {
  const output = {};
  Object.keys(input).forEach((key) => {
    const items = input[key] || [];
    items.forEach((item) => {
      const value = item.toLowerCase();
      output[value] = Number(key);
    });
  });
  return output;
}
module.exports = transform;


