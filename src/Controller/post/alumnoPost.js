const { Alumno } = require("../../db")
const { Router } = require('express');
const router = Router();

router.post('/post', async (req, res) => {
    const { fullname } = req.body;
    try {
        const newStudent = await Alumno.create({ fullname });
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json({message: 'Alumno no pudo ser Creado'});
    }
})
module.exports = router