
//distance from HQ in BLOCKS


//console.log(`Starting Block: ${start} Street`);
//console.log(`Destination Block: ${destination} Street`);

function distanceFromHqInBlocks(start){
   if (start >= 42){
       return (start - 42);
    } else if (start < 42){
        return (42 - start);
    }
}

console.log("Distance from HQ in Blocks:", distanceFromHqInBlocks(start));

// distance from HQ in FEET

function distanceFromHqInFeet(start){
    let blocks = distanceFromHqInBlocks(start);
    return (blocks * 264);
    }
console.log("Distance from HQ in Feet:",distanceFromHqInFeet());

//distance travelled in FEET

function distanceTravelledInFeet(start, destination){
    if (start > destination){
       return ((start - destination) * 264)
    } else if (destination > start){
        return ((destination - start) * 264)
}};
console.log("Distance Traveled in Feet:",distanceTravelledInFeet(start,destination));


// fare price calculation

 

function calculatesFarePrice(start, destination){
    let distanceFeet = distanceTravelledInFeet(start,destination);
    if (distanceFeet <= 400){
        return 0;
    }
    else if (distanceFeet > 400 && distanceFeet <= 2000){
        return ((distanceFeet - 400) * .02);
        
    }
    else if (distanceFeet > 2000 && distanceFeet < 2500){
        return 25;
    }
    else if (distanceFeet > 2500) {
        return 'cannot travel that far'
    }
}
console.log("Fare Price:",calculatesFarePrice(start, destination));