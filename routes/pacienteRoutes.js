import express from "express";
const router = express.Router();

import {
    agregarPaciente,
    obtenerPaciente
} from "../controllers/PacienteController.js";

router.route('/')
    .post(agregarPaciente)
    .get(obtenerPaciente)

export default router;