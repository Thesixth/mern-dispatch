const router = require('express').Router();

let Dispatch = require('../models/dispatch.model');

router.route('/').get((req, res) => {
    Dispatch.find()
        .then(dispatches => res.json(dispatches)
        .catch(err => res.status(400).json('Error: ' + err)));
});

router.route('/:id').get((req, res) => {
    Dispatch.findById(req.params.id)
        .then(dispatches => res.json(dispatches)
        .catch(err => res.status(400).json('Error: ' + err)));
});

router.route('/add').post((req, res) => {
    const driver = req.body.drivername;
    const driverphone = req.body.driverphone;
    const pickuplocation = req.body.pickuplocation;
    const phonenumber    = Number(req.body.phonenumber);
    const pickupinstructions = req.body.pickupinstructions;
    const pickupdate = Date.parse(req.body.pickupdate);
    const dropofflocation = req.body.dropofflocation;
    const dropoffphonenumber = Number(req.body.dropoffphonenumber);
    const dropoffinstructions = req.body.dropoffinstructions;
    const dropoffdate = Date.parse(req.body.dropoffdate);

    const newDispatch = new Dispatch({

        driver,
        driverphone,
        pickuplocation,
        phonenumber,
        pickupinstructions,
        pickupdate,
        dropofflocation,
        dropoffphonenumber,
        dropoffinstructions,
        dropoffdate,
    });

    newDispatch.save()
        .then(() => res.json('dispatch added!'))
        .catch(err => res.status(400).json('dispatch not added ' + err));
});

router.route('/:id').delete((req, res) => {
    Dispatch.findByIdAndDelete(req.params.id)
        .then(() => res.json('Dispatch has been deleted.'))
        .catch((error) => res.status(400).json('dispatch not deleted'));
});

router.route('/update/:id').post((req, res) => {
    Dispatch.findById(req.params.id)
        .then(dispatch => {
             dispatch.drivername = req.body.drivername
             dispatch.pickuplocation = req.body.pickuplocation;
             dispatch.phonenumber    = Number(req.body.phonenumber);
             dispatch.pickupinstructions = req.body.pickupinstructions;
             dispatch.pickupdate = Date.parse(req.body.pickupdate);
             dispatch.dropofflocation = req.body.dropofflocation;
             dispatch.dropoffphonenumber = Number(req.body.dropoffphonenumber);
             dispatch.dropoffinstructions = req.body.dropoffinstructions;
             dispatch.dropoffdate = Date.parse(req.body.dropoffdate);

             dispatch.save()
                .then(() => res.json('Dispatch has been updated'))
                .catch(err => res.status(400).json('Error: dispatch not updated' + err));
        });
})

module.exports = router;