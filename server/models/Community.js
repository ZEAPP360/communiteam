const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const communitySchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref : 'User'
            }
        ]
    }
);

const Community = model('Community', communitySchema);

module.exports = Community;