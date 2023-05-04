const { Alumno, Calificaciones } = require("../../db")
const { Router } = require('express');
const router = Router();

router.post('/post', async (req, res) => {
    const { alumnoId, materia, nota } = req.body;
    try {
        const alumno = await Alumno.findOne({ where: { id: alumnoId } });
        if (!alumno) {
            return res.status(400).json({ message: 'Alumno Inexistente' });
        }
        const nuevaCalificacion = await Calificaciones.create({ materia, nota, alumnoId });
        await alumno.addCalificaciones(nuevaCalificacion);
        return res.status(200).send(nuevaCalificacion);
    } catch (error) {
        return res.status(400).send('No se pudo cargar las Calificaciones');
    }
})
module.exports = router

