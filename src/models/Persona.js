const mongoose = require('mongoose');
const {Schema} = mongoose;
const itemSchema = new Schema((
    { 
        first: {type: String , required : true},
        last: {type: String,required: true},
        email:{type: String , required : true},
        uuid: {type: String , required : true},
        foto:{type: String , required : true},
        fecha:{type: Date, default: Date.now}
    }
));
module.exports = mongoose.model('persona',itemSchema);
