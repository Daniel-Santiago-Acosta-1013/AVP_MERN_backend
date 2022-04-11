import express from 'express';
const router = express.Router();
import { registar, perfil }from '../controllers/veterinarioController.js';

router.post('/', registar);
router.get('/perfil', perfil);

export default router;

