var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here


// /////////////////////////
// Check Development Plan V1
// /////////////////////////

// CAD data routing

router.get('/check-my-plans/initial-check/v1/03-upload-cad', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasCAD = req.query.hasCAD

  if (hasCAD === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v1/03b-no-cad')
  } else {
    // if hasCAD is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v1/03-upload-cad')
  }
})


module.exports = router
