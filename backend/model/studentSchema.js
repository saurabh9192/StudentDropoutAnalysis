

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const studentSchema = new mongoose.Schema({
    
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

    age: {
        type: String,
        required: true,
        min: 1,
        max: 99
    },

    gender: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    aadharno: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    udisecode: {
        type: String,
        required: true
    },

    isresolved: {
        type: Boolean,
        required: true
    },
    
    
reason: {
    type: String,
    required: true
},


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

// studentSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next(); 
// });

// studentSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log(err);
//     }
// };



// Export models
const Student = mongoose.model('STUDENTUSERS', studentSchema);
module.exports =  Student ;