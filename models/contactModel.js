const mongoose = require( 'mongoose' );

const contactSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Please add the contact name'] },
    email: { type: String, required: [true, 'Please add your personal email'] },
    phone: { type: String, required: [true, 'Please add your phone number'] },
},{
    timestamps: true,
}

)

module.exports = mongoose.model('Contact', contactSchema);  //creating a model called Contact using the schema defined above
