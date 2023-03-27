const secondsToMinutes = (obj) => {
    let secs = obj;
    let mins = Math.floor(secs/60);
    let rSecs = secs - mins * 60;
    let fSecs = rSecs.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    return (
        mins + ":" + fSecs
    )
}

export default secondsToMinutes;