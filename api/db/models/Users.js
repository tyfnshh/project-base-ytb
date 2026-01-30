const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    is_active: {type: Boolean, default: true},
    fist_name: {type: String, require: true},
    last_name: {type: String, require: true},
    phone_number: {type: String, require: true}
},{
    timeseries: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Users extends mongoose.Model {


}

schema.loadClass(Users);
module.exports = mongoose.model('Users', schema);