// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let blocks = street - 42
  return Math.abs(blocks);
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
};

function distanceTravelledInFeet(start, finish) {
  let blocks = Math.abs(start - finish);
  return blocks * 264;
};

function calculatesFarePrice(start, finish) {
  let distance = distanceTravelledInFeet(start, finish)
  if (distance < 400) {
    0
  }
}
