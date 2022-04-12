import express from 'express';
const router = express.Router();
import { 
registar, 
perfil, 
confirmar,
autenticar 
}from '../controllers/veterinarioController.js';

router.post('/', registar);
router.get('/perfil', perfil);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);

export default router;

