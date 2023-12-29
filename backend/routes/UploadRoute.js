const {Router} = require('express');

const router = Router();

router.post("/api/save",(req, res) => {
    res.send("handling post request...")
})

module.exports = router;