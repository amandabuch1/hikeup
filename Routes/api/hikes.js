const express = require('express');
const router = express.Router();
const hikesCtrl = require('../../controllers/hikes');


// router.get('/', matzasCtrl.index);

router.post('/create', hikesCtrl.create);


// router.get('/', scoresCtrl.highScores);

// /*---------- Protected Routes ----------*/
// // Process the token for only the routes below

router.use(require('../../config/auth'));
router.post('/create', checkAuth, hikesCtrl.create);
router.post('/all', checkAuth, hikesCtrl.index);
// router.post('/random', checkAuth, eventsCtrl.getRandom);
// router.use(require('../../config/auth'));
// router.post('/', checkAuth, scoresCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports =router;