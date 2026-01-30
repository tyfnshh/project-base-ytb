const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        is_active: {type: Boolean, default: true},
        category_by: {type: mongoose.SchemaTypes.ObjectId, required: true},

},{
    versionKey: false,
    timeseries: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Categories extends mongoose.Model {


}

schema.loadClass(Categories);
module.exports = mongoose.model('Categories', schema);