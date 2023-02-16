const router = require('express').Router()
const { Controller } = require('../controllers/controller')

router.get('/', (req, res) => {
    res.render('Home')
})

router.get('/teams', Controller.team)
// router.get('')
router.get('/charPowers', Controller.charPower)

router.get('/fruit/form', Controller.fruitForm)
router.post('/fruit/form', Controller.postFruit)
router.get('/fruits', Controller.fruitLists)

module.exports = {
    router
}