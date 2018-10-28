// Code your solution in this file!
function distanceFromHqInBlocks (value) {
  return Math.abs(42-value)
}

function distanceFromHqInFeet (someValue) {
  return 264*distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
//
function distanceTravelledInFeet(v1,v2) {
  return 264*(Math.abs(v1-v2))
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function calculatesFarePrice(start, destination){
  let feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
      return 0;
  } else if (feet > 2500) {
      return 'cannot travel that far';
  } else if (feet > 2000) {
      return 25;
  } else {
    return (feet-400)*2*0.01
  }

}
