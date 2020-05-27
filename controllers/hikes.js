// const Hike = require('../models/hike');


// const create = (req, res) =>{
//     // IF NOTHING IN THE KEY DELETE THE KEY
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key];
//     }
//     // FED USER ID TO THE Hike whic loged the id in the new Hike
//     req.body.user = req.user._id;
//     // create a new matza
//     const hike = new Hike(req.body);
//     // save the new matza to the database
//     hike.save(function(err) {
//         if (err) return res.redirect('/createhike');
//         // redirect to matza index page
//         res.redirect(`/hikes`);
//     })
// };

// const index = (req, res) => {
//     Hike.find()
//     // showing entire user object including name field
//     .populate('user')
//     .exec(function(err, hikes) {
//         console.log(hikes);
//         res.render('hikes/index',{
//             user: req.user,
//             name: req.query.name,
//             title: 'All Hikes', 
//             hikes
//         });
//     });
// };




// module.exports = {
//     create,
//     index
// };

