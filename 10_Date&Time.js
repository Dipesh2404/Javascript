let myDate = new Date()
// console.log(myDate.toString());              Thu May 28 2026 12:16:30 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());          Thu May 28 2026
// console.log(myDate.toLocaleDateString());    5/28/2026
// console.log(myDate.toLocaleString());        5/28/2026, 12:16:30 PM
// console.log(myDate.toLocaleTimeString());    12:16:30 PM
console.log(typeof(myDate))

// let myCreateDate = new Date(2023, 0, 23)
let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
