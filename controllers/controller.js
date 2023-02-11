const { Char, Team, Power, Fruit } = require('../models/index')

class Controller {
    static team(req, res) {
        Team.findAll({
            include: [{
                model: Char,
                // require: true
            }]
        })
        .then(teams => {
            res.send(teams)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static charPower(req, res) {
        Char.findAll({
            include: [{
                model: Power
            }]
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static fruitLists(req, res) {
        Fruit.findAll({
            include: [{
                model: Char
            }]
        })
        .then(fruits => {
            res.send(fruits)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = {
    Controller
}