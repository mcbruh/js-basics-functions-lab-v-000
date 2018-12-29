// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  const block = 264
  let blocks = distance / block
  return Math.ceil(blocks);
};
