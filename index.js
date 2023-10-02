// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue<42) {
          return(42-someValue)
    }
    else {
        return(someValue-42)
    }
        
}


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) *264

}



function distanceTravelledInFeet(a,b) {
    if (b>a) {
        return((b-a)*264)
    }else if (a>b) {
        return((a-b)*264)
    }
}


function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400) {
        return 0
    } if(distanceTravelled > 400 && distanceTravelled < 2000) {
        let fare = (distanceTravelled -400) *.02
        return fare
    } if(distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far'
    }
}
