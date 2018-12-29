// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const block = 264
  let distance = street - 42
  let blocks = distance / block
  return Math.ceil(blocks);
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
};

function distanceTravelledInFeet(street) {
  
}
