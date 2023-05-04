const { Router } = require('express');

const postAlumno = require("../Controller/post/alumnoPost")
const postCalificaciones = require("../Controller/post/calificacionesPost")

const getAllAlumnos = require("../Controller/get/getAlums")
const getAllCal = require("../Controller/get/calificacionGet")

const getCalificacionPorNombre = require("../Controller/get/getCalificacionesPorNombre")



const router = Router();





//GET
router.get("/",(req, res) =>{res.status(200).json({message:'Api Alumnos'})})

router.use("/alumnos", getAllAlumnos)
router.use("/calificaciones", getAllCal)
router.use("/calificaciones", getCalificacionPorNombre)



//POST
router.use("/alumno", postAlumno);
router.use("/calificacion", postCalificaciones);

//PUT

//DELETE


module.exports = router