// const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "dipeshabc" 
tinderUser.name = "Dipesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regularUser = {
    email: "sum@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Dipesh",
            lastname: "Choudhary"
        },
    },
    data: "full",
}

// console.log(regularUser.email)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "f@gmail.com"
    },
    {
        id: 4,
        email: "g@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser)) // To access keys 
// console.log(Object.values(tinderUser)) // To access values



// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}

// console.log(course.courseinstructor)

const {courseinstructor: instructor} = course
// console.log(courseinstructor)
// console.log(instructor)

// {
//     "name": "Dipesh",
//     "coursename": "JS in hindi",
//     "price": "Free"
// }


[
    {},
    {},
    {}
]