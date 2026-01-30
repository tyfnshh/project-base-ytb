const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
        Permissions:{type: String, required: true},
        created_by: { type: mongoose.SchemaTypes.ObjectId, require: true},

},{
    versionKey: false,
    timeseries: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class RolePrivileges extends mongoose.Model {


}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model('RolePrivileges', schema);