const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:  "User"
    },
    username: {
        type: String,
        required: [true, 'User Name is required']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'user with this email already exists'] 
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
},{
    timestamps: true, // Saves createdAt and updatedAt values automatically
})


// module.exports allows us to use the User model in other files
module.exports = mongoose.model('User', userSchema);
