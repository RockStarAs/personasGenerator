const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const exphbs = require('express-handlebars');
require('./database');
/*Settings*/
app.use(express.urlencoded({extended:false}));
app.set('views',path.join(__dirname,'views'));

app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layout'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');
app.use(morgan('dev'));
app.set('port',process.env.PORT ||
3000);
app.use(express.json());
app.use(require('./rutas/index'));
app.use(require('./rutas/coleccion'));
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto:  ', app.get('port'));
})
app.use(express.static(path.join(__dirname,'public')));

