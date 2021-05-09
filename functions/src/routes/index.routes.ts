import { Router } from 'express'
import { indexWelcome,crearUsuario,test } from '../controllers/index.controller'

const router = Router();

router.route('/')
    .post(indexWelcome);

router.route('/')
    .get(test)

router.route('/registro')
    .post(crearUsuario);
export default router;