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
                model: Char,
                require: true
            }]
        })
        .then(fruits => {
            res.render('Fruit', { fruits })
            // console.log(fruits[0].Char.name)
            // res.send(fruits)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static fruitForm(req, res) {
        let errMessages = req.query
        let errors
        if(errMessages.msg) {
            errors = errMessages.msg.split(',')
        }
        console.log('DARI REQ QUERY BOSS ==========================')
        console.log(errors)
        // res.send(errMessages)
        res.render('FruitForm', { data: errors})
    }

    static postFruit(req, res) {
        const data = req.body
        // res.send(data.name)
        Fruit.create({
            name: data.name,
            type: data.type,
            ability: data.ability || null,
            charId: data.charId || null
        })
        .then(fruit => {
            // res.send(fruit)
            res.redirect('/fruits')
            // console.log()
        })
        .catch(err => {
            // console.log(err)
            let errMessages = err.errors
            errMessages = errMessages.map(el => {
                return el.message
            })
            // console.log(errMessages)
            // res.send(errMessages)
            res.redirect(`/fruit/form?msg=${errMessages}`)
        })
    }
}

module.exports = {
    Controller
}