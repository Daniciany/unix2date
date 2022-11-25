function unixToTime(unix) {
    const milliseconds = unix * 1000
    const timeString = new Date(milliseconds).toString()

    const timeArr = timeString.split(" ")

    switch (timeArr[0]) {
        case "Mon":
            timeArr[0] = "Monday"
            break
        case "Tue":
            timeArr[0] = "Tuesday"
            break
        case "Wed":
            timeArr[0] = "Wednesday"
            break
        case "Thu":
            timeArr[0] = "Thursday"
            break
        case "Fri":
            timeArr[0] = "Friday"
            break
        case "Sat":
            timeArr[0] = "Saturday"
            break
        case "Sun":
            timeArr[0] = "Sunday"
            break
    }

    switch (timeArr[1]) {
        case "Jan":
            timeArr[1] = "January"
            break
        case "Feb":
            timeArr[1] = "February"
            break
        case "Mar":
            timeArr[1] = "March"
            break
        case "Apr":
            timeArr[1] = "April"
            break
        case "Jun":
            timeArr[1] = "June"
            break
        case "Jul":
            timeArr[1] = "July"
            break
        case "Aug":
            timeArr[1] = "August"
            break
        case "Sep":
            timeArr[1] = "September"
            break
        case "Oct":
            timeArr[1] = "October"
            break
        case "Nov":
            timeArr[1] = "November"
            break
        case "Dec":
            timeArr[1] = "December"
            break
        default:
            break
    }

    return {
        day: timeArr[0],
        month: timeArr[1],
        date: timeArr[2],
        year: timeArr[3],
        fullDate: timeArr[1] + "-" + timeArr[2] + "-" + timeArr[3],
        time: timeArr[4],
        timeZone: timeArr[5]
    }
}

module.exports = unixToTime