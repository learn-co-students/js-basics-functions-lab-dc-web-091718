// Code your solution in this file!


function distanceFromHqInBlocks(streetnum) {
  let blocks = (streetnum >= 42) ? (streetnum - 42) : (42 - streetnum)
  return blocks;
}

//calculating blocks into feet
//a block is 264 feet long
function distanceFromHqInFeet(streetnum) {
  return 264 * distanceFromHqInBlocks(streetnum)
}

function distanceTravelledInFeet(start, end) {
  let blocks = (start > end) ? (start - end) : (end - start)
    return blocks * 264
}


function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start,end);

  let fare;
    if (feet > 2500) {
      fare = 'cannot travel that far'
    }
    else if (feet > 400 && feet <= 2000) {
      fare = (feet - 400) * .02;
    }
    else if (feet > 2000){
      fare = 25;
    }
    else {
      fare = 0;
    }
    return fare;
}
