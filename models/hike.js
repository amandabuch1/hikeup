const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date:{
        type: Date
    },
    description: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },

    // TODO NEED TO DOUBLE CHECK THIS
    // comment: {
    //     type: Schema.Types.ObjectId, 
    //     ref: 'Comment'
    // }

}, {
    timestamps: true
});

// Ensure that initials are uppercase & not longer than 3 characters
// hikeSchema.pre('save', function(next) {
//   this.initials = this.initials.substr(0, 3).toUpperCase();
//   next();
// });

module.exports = mongoose.model('Hike', hikeSchema);