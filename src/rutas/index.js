const express = require('express');
const router = express.Router();
const api = require('../objects/object');
const Persona = require('../models/Persona');
let objj  = {};
router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/generar',(req,res)=>{
    let dataPersona = new api();
    dataPersona.obtenPersona().then((data)=>{
        const primerNombre = data.results['0'].name.first;
        const foto = data.results['0'].picture.large;
        const email  = data.results[0].email;
        const last = data.results[0].name.last;
        const uuid = data.results[0].login.uuid;
        const obj = {
            primerNombre,
            foto, //esto lo entendía como shorthand? 
            email,
            last,
            uuid
        }
        res.render('persona',{objeto : obj});
    })
    
});
router.post('/agregar',async (req,res)=>{
    const{ first,last,email,uuid,foto} = req.body;
    const persona = new Persona({first,last,email,uuid,foto});
    await persona.save();
    console.log(persona);
    
    //console.log(persona);
    res.redirect('/coleccion');
});
module.exports = router;