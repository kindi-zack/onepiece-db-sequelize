const router = require('express').Router()
const { Controller } = require('../controllers/controller')

router.get('/', (req, res) => {
    res.send('onepiece db...')
})

router.get('/teams', Controller.team)
// router.get('')
router.get('/charPowers', Controller.charPower)
router.get('/fruits', Controller.fruitLists)

module.exports = {
    router
}