import { Router } from 'express'
import { indexWelcome,crearUsuario } from '../controllers/index.controller'

const router = Router();

router.route('/')
    .post(indexWelcome);

router.route('/registro')
    .post(crearUsuario);

export default router;