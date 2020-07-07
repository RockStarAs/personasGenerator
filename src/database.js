const mongoose = require('mongoose');
mongoose.connect
('mongodb+srv://Rudy123:Abel100@cluster0.ksdzn.mongodb.net/dbPersonas?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log("connect db")).catch(err => console.log('err ',err));