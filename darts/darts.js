// Write a function that returns the earned points in a single toss of a Darts game.
// If the dart lands outside the target, player earns no points (0 points).
// If the dart lands in the outer circle of the target, player earns 1 point.
// If the dart lands in the middle circle of the target, player earns 5 points.
// If the dart lands in the inner circle of the target, player earns 10 points.

// The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target), 
// the middle circle a radius of 5 units, and the inner circle a radius of 1.

export const solve = (x, y) => {
  let targetOuter = 10;
  let targetMiddle = 5;
  let targetInner = 1;
  let distanceToDart = Math.sqrt(x * x + y * y);

  if (isNaN(x) || isNaN(y)) {
    return null;
  }

  if (distanceToDart > 10) {
    return 0;
  } else if (distanceToDart > 5) {
    return targetInner;
  } else if (distanceToDart > 1) {
    return targetMiddle;
  }
  return targetOuter;
}
