// Singleton 

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dipesh",
    "fullname": "Dipesh Choudhary",
    [mySym]: "key1",
    age: 23,
    location: "Udaipur",
    email: "dipesh@fbspl.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) Reason why to use this way of accessing is because lets say if we have something to access (eg. line 7), then we wont be able to access using "."

// console.log(JsUser[mySym])

// JsUser.email = "dipesh@chatgpt.com"
// console.log(JsUser["email"])

// Object.freeze(JsUser) It wont let you change the values, as it freezes the object 
JsUser.email = "dipesh@facebook.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js users!")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.fullname}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())