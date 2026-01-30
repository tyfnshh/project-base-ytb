const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
        Users_id:{type: mongoose.SchemaTypes.ObjectId, required: true},

},{
    versionKey: false,
    timeseries: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class UsersRoles extends mongoose.Model {


}

schema.loadClass(UsersRoles);
module.exports = mongoose.model('UsersRoles', schema);