const express = require("express")
const router = express.Router()
const moviecontroller = require("../controllers/movieController")


router.get('/', moviecontroller.index)

router.get('/:id', moviecontroller.show)

router.post('/', moviecontroller.store)

module.exports = router;