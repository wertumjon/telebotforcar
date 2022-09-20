const { default: mongoose } = require('mongoose');
const momgoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    sex: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    chat: {
        type: Number,
        required: true,
    },
    withid: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);