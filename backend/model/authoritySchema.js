

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authoritySchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    udisecode: {
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
const Student = mongoose.model('AUTHORITYUSER', authoritySchema);
module.exports =  Student ;