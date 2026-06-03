// // Memories are of 2 types

// 1. Stack (Primitive) - We get copy to update the values
// 2. Heap (Non-Primitive) - We get original values to update

// let myYoutubename = "DipeshChoudhary"

// let anothername = "Popai"
// anothername = "Weroyn"

// console.log(anothername)
// console.log(myYoutubename)

let userOne = {
    email: "user@facebook.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dipesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)
