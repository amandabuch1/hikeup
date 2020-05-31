const Hike = require('../models/hike');

const index = (req, res) => {
    Hike.find()
    .populate('user')
    .exec((err, hikes)=>{
        res.status(200).json(hikes)
    });
};

// const getRandom = async(req,res) =>{
//     console.log(req.body)
//     const query = `https://www.hikingproject.com/data/get-trails?lat=${req.body.location.lat}=-105.2519&maxDistance=10&key=200777110-058d2a636fad93c789120d575c7a5cf5`
//     await fetch(query)
//     .then(res => {
//         if (res.ok) return res.json()
//         throw new Error('Bad call')
//     })
//     .then(data => {
//         res.json({data})
//     })
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
    // console.log("req.body.user",req.body.user)
    // create a new hike
    const newHike = new Hike(req.body);
    
    
    // save the new hike with the user to the database
    try {
        await newHike.populate('user').execPopulate();
        await newHike.save();
        const hike = newHike
    
        console.log(hike)
        res.json( {hike} );

      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }
};

module.exports = {
    create,
    index,
    // getRandom
};

