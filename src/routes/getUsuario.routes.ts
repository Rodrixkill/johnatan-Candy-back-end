import { Router } from 'express'
import {obtenerUsuarios,crearUsuario,obtenerUsuario} from '../controllers/usuario.controller'

const router = Router();

router.route('/')
    .get(obtenerUsuarios)
    .post(crearUsuario);

router.route('/:id')
    .get(obtenerUsuario);




export default router;