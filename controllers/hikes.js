const Hike = require('../models/hike');

// const index = (req, res) => {
//     Matza.find()
//     .populate('user')
//     .exec((err, matzas)=>{
//         res.status(200).json(matzas)
//     });
// };


const create = async(req, res) =>{
    // IF NOTHING IN THE KEY DELETE THE KEY
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    // loging the user 
    // console.log("req.user",req.user, req.user._id);

    // FED USER ID TO THE Hike whic loged the id in the new Hike
    req.body.user = req.user;
    console.log("req.body.use",req.body.use)
    // create a new hike
    const newHike = new Hike(req.body);
    // newHike.populate("user")
    
    // save the new hike with the user to the database
    try {
        await newHike.populate('user').execPopulate();
        await newHike.save();
        const hike = newHike
        // .populate("user")
        console.log(hike)
        res.json( {hike} );

      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }
};

module.exports = {
    create,
};

