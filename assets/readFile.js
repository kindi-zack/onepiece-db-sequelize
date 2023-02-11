const fs = require('fs')

let chars = fs.readFileSync('./assets/op_char.json', 'utf8')
chars = JSON.parse(chars)
chars = chars.map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()

    return el
})
// console.log(chars)


let teams = fs.readFileSync('./assets/teams.json', 'utf8')
teams = JSON.parse(teams)
teams = teams.map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()

    return el
})

// console.log(teams)


let powers = fs.readFileSync('./assets/power.json', 'utf8')
powers = JSON.parse(powers)
powers = powers.map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()

    return el
})

// console.log(powers)


let charPowers = fs.readFileSync('./assets/char-power.json', 'utf8')
charPowers = JSON.parse(charPowers)
charPowers = charPowers.map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()

    return el
})

// console.log(charPowers)

let fruits = fs.readFileSync('./assets/devil_fruits.json', 'utf8')
fruits = JSON.parse(fruits)
fruits = fruits.map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()

    return el
})

// console.log(fruits)



module.exports = {
    teams, chars, powers, charPowers, fruits
}