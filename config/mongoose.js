//require library
const mongoose=require('mongoose');

//connect db
mongoose.connect('mongodb://localhost/contact_list_db');

//ACQUIRE connection if successful
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running
db.once('open',function()
{
    console.log('successful connection to db');
})