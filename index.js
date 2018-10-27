const distanceFromHqInBlocks = (end) => {
  return Math.abs(end - 42);
}
const distanceFromHqInFeet = (end) => {
  return Math.abs(end - 42) * 264;
}
const distanceTravelledInFeet = (begin, end) => {
  return Math.abs(end - begin) * 264;
}
const calculatesFarePrice = (begin, end) => {
  let distance = Math.abs(end - begin) * 264;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
