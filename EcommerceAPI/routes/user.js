const router = require("express").Router();
router.get('/usertest', (req,res) => {
    res.send("User test succeeded");
});

router.get('/userpost', (req,res) => {

    const username =req.body.username;
    res.send("User test succeeded" + username);
});
module.exports = router;
