// Code your solution in this file!
const HQ = 42

function distanceFromHqInBlocks(block){

	return  block > HQ ? block - HQ : Math.abs(block - HQ)

}

function distanceFromHqInFeet(end){

	return distanceTravelledInFeet(HQ, end)

}

function calculatesFarePrice(start, end) {
 let feet = distanceTravelledInFeet(start,end);

 let fare = 'cannot travel that far';
   if (feet < 400){
     fare = 0;
   }
   else if (feet > 400 && feet <= 2000) {
     fare = (feet - 400) * .02;
   }
   else if (feet > 2000 && feet < 2500){
     fare = 25;
   }
   
   return fare;
}

function distanceTravelledInFeet(start, end){
	return end>start ? (end-start)*264 : (start-end)*264

}