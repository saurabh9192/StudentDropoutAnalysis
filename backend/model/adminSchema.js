
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const AdminUser = mongoose.model('ADMINUSERS', adminSchema);

module.exports = AdminUser;
