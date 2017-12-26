function random(min, max) {
  if (arguments.length === 1) {
    max = min;
    return Math.floor(Math.random() * max);
  } else if (arguments.length === 2) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return Math.random();
}
