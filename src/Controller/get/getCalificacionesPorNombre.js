const { Alumno, Calificaciones } = require("../../db")
const { Router } = require('express');
const router = Router();

router.get("/:fullname", async (req, res)=>{
    const {fullname} = req.params
    try {
        const nombreAlumno = await Alumno.findOne({ where: { fullname: fullname }});
        if (!nombreAlumno) {        
            return res.status(404).json({ error: `El alumno ${fullname} no fue encontrado` });
        }
        const notas = await nombreAlumno.getCalificaciones();
        return res.status(200).json(notas);
        } catch (error) {
          res.status(400).send('No se encuentran la Calificacion del Alumno')
        }
})

module.exports = router