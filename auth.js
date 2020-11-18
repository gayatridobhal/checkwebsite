const urlExist = require("url-exist");

var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    website: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
); 

const User = mongoose.model('User', userSchema);

router.post("/signup", (req, res) => {
  const user = new User(req.body);
  (async () => {
    const exists = await urlExist(user.website);
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