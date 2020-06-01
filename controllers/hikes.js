const Hike = require('../models/hike');

const index = (req, res) => {
    Hike.find()
    .populate('user')
    .exec((err, hikes)=>{
        res.status(200).json(hikes)
    });
};

const create = async(req, res) =>{
    // IF NOTHING IN THE KEY DELETE THE KEY
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    // loging the user 
    // console.log("req.user",req.user, req.user._id);

    // FED USER ID TO THE Hike whic loged the id in the new Hike
    req.body.user = req.user;
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


// const update = (req, res) =>{
//     Hike.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then((hike)=>{
//         res.status(200).json(hike)
//     });
// };


async function deleteHike(req, res) {
    console.log("HIT CONTROLER")
    const deletedHike = await Hike.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedHike);
}

// const deleteHike = (req, res) => {
//     Hike.findByIdAndRemove(req.params.id).then((hike)=>{
//         res.status(200).json(hike);
//     });
// };

// const show =(req,res)=>{
//     Hike.findById(req.params.id).then((matza)=>{
//         res.status(200).json(matza)
//     });
// }

module.exports = {
    create,
    index,
    // update,
    deleteHike,
    // show
};

