// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    if(distance<42){
        return 42-distance
    }
        else if(distance>42){
            return distance-42;
        
    }
  }

  function distanceFromHqInFeet(distance) {
if (distance<42){
    return(42-distance)*264
}    
else if(distance>42){
    return (distance-42)*264;
}
}
  function distanceTravelledInFeet(destination1, destination2) {
    if (destination2>destination1){
        return (destination2-destination1)*264;
    }
    else if(destination1>destination2){
        return(destination1-destination2)*264;
    }
  }
  


  function calculatesFarePrice(start, destination) {
    const distance =distanceTravelledInFeet(start,destination)
    if(distance<400){
        return 0;
    }
    else if(distance>400 &&distance<=2000){
        return(distance-400)*0.02
    }
    else if(distance>2000 &&distance<=2500){
        return 25;
    }
    else{
        return "cannot travel that far"
    }
  }