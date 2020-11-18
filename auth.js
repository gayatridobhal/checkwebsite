const urlExist = require("url-exist");

var express = require("express");
var router = express.Router();

router.post("/signup", (req, res) => {
  (async () => {
    const exists = await urlExist(req.body.website);
    console.log(exists);
    if(exists===true)
    {
      res.json({
        message: "Website exists"
      })
    }
    else
    {
      res.json({
        message: "Website doesnt exist"
      })
    }
})();
});

module.exports = router;
