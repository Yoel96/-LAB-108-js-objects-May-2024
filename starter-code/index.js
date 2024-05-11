// Your Solution goes here
console.log("Index.js load successfull")



//First Iteration
function fullName(person) {

    return person.firstName + " " + person.lastName

}


console.log(fullName({ firstName: 'Luis', lastName: 'Burón' }))


//Second Iteration

function whoIsOnline(users) {

    const onlineStatus = { online: [], offline: [], afk: [] }
    for (let i = 0; i < users.length; i++) users[i].lastActivity / 60 > 10 && users[i].status != 'offline' ? onlineStatus['afk'].push(users[i].username) : users[i].status === 'online' ? onlineStatus['online'].push(users[i].username) : onlineStatus['offline'].push(users[i].username)
    for (const key in onlineStatus) onlineStatus[key].length == 0 ? delete onlineStatus[key] : ""
    return onlineStatus

}



console.log(whoIsOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 600
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 2320
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 2120
},

]))



//Third Iteration


function overheating(yourComputer, maxTemperatures) {

    const tempsController = { cpu: true, gpu: true, motherBase: true, dvdDriver: true, rom: true, ram: true }
    for (const specs in yourComputer) yourComputer[specs] > maxTemperatures[specs] ? tempsController[specs] = false : ""
    return tempsController

}

var yourComputer = {
    cpu: 25,
    gpu: 45,
    motherBase: 15,
    dvdDriver: 252,
    rom: 5,
    ram: 220,
}

var maxTemperatures = {
    cpu: 33,
    gpu: 42,
    motherBase: 20,
    dvdDriver: 20,
    rom: 10,
    ram: 20,
}


console.log(overheating(yourComputer, maxTemperatures))



//Bonus


function strCount(object) {

    let counter = 0
    for (const key in object) {
        typeof object[key] == "string" ? counter++ : ""
        if (Array.isArray(object[key])) {
            for (let i = 0; i < object[key].flat().length; i++)typeof object[key].flat()[i] == "string" ? counter++ : ""
        }
    }
    return counter
}


console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, [3, "2"], 4],
    fifth: null
}))


function fullNameFormatted(person) {

    return person.firstName[0].toUpperCase() + person.firstName.substring(1,person.firstName.length) + " " + person.lastName[0].toUpperCase() + person.lastName.substring(1,person.lastName.length)

}

console.log(fullNameFormatted({ firstName: 'Luis', lastName: 'burón' }))


function fullNameFormattedv2(person) {

    let firstName = ""
    let lastName = ""
    for (let i = 0; i < person.firstName.split(" ").length; i++) firstName += person.firstName.split(" ")[i][0].toUpperCase() + person.firstName.split(" ")[i].substring(1,person.firstName.length) + " "
    for (let i = 0; i < person.lastName.split(" ").length; i++) lastName += person.lastName.split(" ")[i][0].toUpperCase() + person.lastName.split(" ")[i].substring(1,person.lastName.length) + " "
    return firstName + lastName.trim()

}

console.log(fullNameFormattedv2({ firstName: 'Luis Álvaro', lastName: 'burón mejías' }))
