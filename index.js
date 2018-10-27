// Code your solution in this file!

function distanceTravelledInBlocks(start, end) {
	let distance = Math.abs(start - end);
	return distance;
}
function distanceTravelledInFeet(start, end) {
	let blocks = distanceTravelledInBlocks(start, end);
	return blocks * 264;
}



function distanceFromHqInBlocks(block) {
	return distanceTravelledInBlocks(block, 42);
}
// console.log(distanceFromHqInBlock(52));

function distanceFromHqInFeet(block) {
	
	return distanceTravelledInFeet(block, 42);
}

function calculatesFarePrice(start, end) {
	dist = distanceTravelledInFeet(start, end);
	if (dist <= 400) {
		return 0;
	} else if (dist > 2500) {
		return 'cannot travel that far';
	} else if (dist > 2000) {
		return 25;
	} else {
		pricePerFoot = 0.02;
		return (dist- 400) * pricePerFoot
	}

}


