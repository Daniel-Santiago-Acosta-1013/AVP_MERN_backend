import express from 'express';
const router = express.Router();
import { 
registar, 
perfil, 
confirmar,
autenticar 
}from '../controllers/veterinarioController.js';
import checkAuth from "../middleware/authMiddleware.js"

router.post('/', registar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.get('/perfil', checkAuth, perfil);

export default router;

