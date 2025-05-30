
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const schoolSchema = new mongoose.Schema({
    
    // School Information
    schoolname: {
        type: String,
        required: true
    },

    udisecode: {
        type: String,
        required: true
    },
    
    state: {
        type: String,
        required: true
    },
    
    district: {
        type: String,
        required: true
    },
    
    taluka: {
        type: String,
        required: true
    },
    
    city: {
        type: String,
        required: true
    },
    
    pincode: {
        type: String,
        required: true
    },
    
    board: {
        type: String,
        required: true
    },
    
    classfrom: {
        type: String,
        required: true
    },

    classto: {
        type: String,
        required: true
    },

    yearofestablishment: {
        type: String,
        required: true
    },

    // Personal Information
    fname: {
        type: String,
        required: true
    },
    
    mname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    isteacher: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },

    // profilepic: {
    //     type: String,
    //     required: true
    // },

    password: {
        type: String,
        required: true
    },



    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


// Password Hashing
schoolSchema.pre('save', async function(next) {

    if (this.isModified('password')) 
    {
        this.password = await bcrypt.hash(this.password, 12);
    }

    if (this.isModified('cpassword')) 
    {
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();
});


// Generate Token 
// schoolSchema.methods.generateAuthToken = async function () {

//     try {
//         let token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY, { expiresIn: "30d"})
//         console.log('Generated Token:', token);
//         this.tokens = this.tokens.concat({token: token}) 
//         await this.save()
//         return token
//     }

//     catch(err) {
//         console.log(err)
//     }
// }


const School = mongoose.model('SCHOOLUSER', schoolSchema);

module.exports = School;
