const express   = require('express');
const cors      = require('cors');
const mongoose  = require('mongoose');


require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect( uri, { useNewUrlParser: true,
                         useCreateIndex: true,
                         useUnifiedTopology: true 
                        });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connected! clap for yourself')
});

const driversRouter = require('./routes/drivers');
const dispatchesRouter = require('./routes/dispatches');

app.use('/drivers', driversRouter);
app.use('/dispatches', dispatchesRouter);
// app.use('/company', companyRouter); 

app.listen(port, () => {
    console.log(`Server is running @ port ${port}`);
});