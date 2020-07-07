const express = require('express');
const router = express.Router();
const persona = require('../models/Persona');
router.get('/coleccion', async (req,res)=>{
    var doc =  await persona.find();
    const contexto = {
        people: doc.map((personas)=>{
            return {
                _id : personas.id,
                first: personas.first,
                last: personas.last,
                email: personas.email,
                uuid: personas.uuid,
                foto: personas.foto,
                fecha: personas.fecha
            }
        })
    }
    res.render('coleccion',{people : contexto.people});
});
router.get('/delete/:_id',async(req,res)=>{
    var doc = await persona.findByIdAndDelete(req.params._id);
    console.log('deleted ',req.params._id);
    res.redirect('/coleccion');

});
module.exports = router;