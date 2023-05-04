const { Alumno, Calificaciones } = require("../../db")
const { Router } = require('express');
const router = Router();

router.get("/", async (req, res)=>{
    try {
        const allAlums = await Alumno.findAll({
            include:{
                model:Calificaciones,
                attributes:["materia", "nota"]
            }
        });
        return res.status(200).send(allAlums)
    } catch (error) {
        res.status(400).send('No se encuentran los Alumnos')
    }
})

module.exports = router