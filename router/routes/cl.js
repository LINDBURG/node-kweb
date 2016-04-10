var express = require("express");
var router = express.Router();

var title = "cl";

var data_about = {
  "kweb": [
    {
      "name": "채호경",
      "status": "부회장"
    },
    {
      "name": "박승현",
      "status": "회원"
    },
    {
      "name": "유재효",
      "status": "회원"
    },
    {
      "name": "문재호",
      "status": "회원"
    }
  ]
};



router.get('/', function(req, res) {
  res.render('index',
      { "title": title,
        title: "yes",
        data: data_about
      }
  );
});

module.exports = router;