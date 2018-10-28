// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  blocks = Math.abs(pickup-42);
  return blocks;
}

function distanceFromHqInFeet(pickup){
  feet = Math.abs((pickup-42))*264;
  return feet;
}

function distanceTravelledInFeet(pickup,dropoff){
  totalFeet = Math.abs((pickup-dropoff))*264;
  return totalFeet;
}



function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
    }
    else if (distance > 400 && distance <= 2000) {
    return .02*(distance - 400);
    }
    else if (distance > 2000 && distance < 2500){
    return 25;
    }
    else {
    return 'cannot travel that far';
    }
}
