const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const dispatchSchema = new Schema({
        driver : { type: String, required: true},
        driverphone: {type: Number, required: true },
        pickuplocation: { type: String, required: true },
        phonenumber: { type: Number, required: true },
        pickupinstructions: { type: String },
        pickupdate: { type: Date, required: true },
        dropofflocation: { type: String, required: true },
        dropoffphonenumber: { type: Number, required: true },
        dropoffinstructions: { type: String },
        dropoffdate: { type: Date, required: true },   
}, {
    timestamps: true,
});

const Dispatch = mongoose.model('Dispatch', dispatchSchema);

module.exports = Dispatch;