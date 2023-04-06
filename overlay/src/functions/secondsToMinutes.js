const secondsToMinutes = (secs, isOT) => {
    let mins = Math.floor(secs/60);
    let rSecs = secs - mins * 60;
    let fSecs = rSecs.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    if (isOT === true) return "+" + mins + ":" + fSecs;
    else return mins + ":" + fSecs;
}

export default secondsToMinutes;