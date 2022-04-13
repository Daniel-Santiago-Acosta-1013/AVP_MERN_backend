import express from "express";
const router = express.Router();

import {
    agregarPaciente,
    obtenerPaciente
} from "../controllers/PacienteController.js";
import checkAuth from '../middleware/authMiddleware.js';

router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(obtenerPaciente)

export default router;