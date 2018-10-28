// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue - 42)
  //returns the number of blocks given a value
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(startLocation, endLocation) {
  if (startLocation >= endLocation) {
    return (startLocation - endLocation) * 264
  } else {
    return (endLocation - startLocation) * 264
  }
}

function calculatesFarePrice(start, destination) {
  distanceTraveled = distanceTravelledInFeet(start, destination)
  switch (true) {
    case distanceTraveled <= 400:
      return 0;
    case distanceTraveled < 2000:
      return (distanceTraveled - 400) * .02;
    case distanceTraveled <= 2500:
      return 25;
    default:
      return 'cannot travel that far';
  }
}
