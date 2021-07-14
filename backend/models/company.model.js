const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyname: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    address: { 
                address1 :{type: String, required: true},
                city: {type: String, required: true },
                province: {type: String, required: true },
                postalcode: { type: Number, required: true },
             },
}, {
    timestamps: true,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;