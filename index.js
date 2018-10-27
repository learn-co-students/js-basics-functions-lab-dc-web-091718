const blockInFeet = 264

function distanceFromHqInBlocks (value) {
  if (value >= 42) {
    return (value - 42);
  } else {
    return (42 - value);
  }
}

function distanceFromHqInFeet (value) {
  return (distanceFromHqInBlocks(value) * blockInFeet);
}

function distanceTravelledInFeet (blockOne, blockTwo) {
  if (blockOne >= blockTwo) {
    return ((blockOne - blockTwo) * blockInFeet);
  } else {
    return ((blockTwo - blockOne) * blockInFeet);
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}