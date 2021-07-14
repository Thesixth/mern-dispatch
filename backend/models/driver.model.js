const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    drivername: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    driverphone: { type: Number, required: true },
}, {
    timestamps: true,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;