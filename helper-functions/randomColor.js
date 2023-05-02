function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  const r = randomInteger(255);
  const g = randomInteger(255);
  const b = randomInteger(255);

  return `rgb(${r}, ${g}, ${b})`;
}

module.exports = {
  randomInteger,
  randomRgbColor,
};
