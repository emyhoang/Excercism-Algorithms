export const compute = (dna1, dna2) => {
  let count = 0;
  if (dna1.length != dna2.length) {
    throw 'left and right strands must be of equal length'
  }
  for (var i = 0; i <= dna1.length; i++) {
    if (dna1[i] != dna2[i]) {
      count++;
    }
  }
  return count;
}
