function speedDetector(speed) {
    //lets set the speed limit to 70 for every 5km
    const limit = 70;
    const kmPerPoint = 5;

    if (speed <= limit) {
        return 'ok';
    } else {
        const points = Math.floor((speed - limit) / kmPerPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
        
    }
}  
    console.log(speedDetector(85));
