const { Alumno, Calificaciones } = require("../../db")
const { Router } = require('express');
const router = Router();

router.get("/", async (req, res)=>{
    try {
        const allCalificaciones = await Calificaciones.findAll({
            include:{
                model:Alumno,
                attributes:["fullname"]
            }
        });
        return res.status(200).send(allCalificaciones)
    } catch (error) {
        res.status(400).send('No se encuentran las Calificaciones')
    }
})

module.exports = router