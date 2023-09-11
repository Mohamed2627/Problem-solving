function calculateAngle(hour, minute) {
    if (hour == 12) hour = 0
    if (minute == 60) {
        minute = 0
        hour++
    }
    let minuteAngle = (360 / 60) * minute
    let hourAngle = (hour * 30) + ((minute / 60) * 30);
    let angle = Math.abs(minuteAngle - hourAngle)
    if (hour >= 6) return Math.min((360 - angle), angle)
    return Math.max((360 - angle), angle);
}

console.log(calculateAngle(11, 10));