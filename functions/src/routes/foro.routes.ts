import { Router } from 'express'
import { crearForo, eliminarForo, actualizarForo } from '../controllers/foro.controller'

const router = Router();

router.route('/')
    .post(crearForo);

router.route('/:id')
    .delete(eliminarForo)
    .put(actualizarForo);



export default router;