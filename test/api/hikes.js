// TEST FORNEW CLONE 

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
// router.post('/:id', checkAuth, hikesCtrl.update);
router.get('/index', checkAuth, hikesCtrl.index);
router.delete('/:id', checkAuth, hikesCtrl.deleteHike);
// router.get('/:id', checkAuth, hikesCtrl.show);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports =router;