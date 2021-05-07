import { Router } from 'express'
import {obtenerUsuarios,crearUsuario,obtenerUsuario} from '../controllers/usuario.controller'

const router = Router();

router.route('/')
    .post(crearUsuario);
router.route('/:search')
    .get(obtenerUsuarios);
    
export default router;