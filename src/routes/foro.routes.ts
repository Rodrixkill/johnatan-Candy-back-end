import { Router } from 'express'
import {obtenerForos, crearForo, eliminarForo, actualizarForo, obtenerForo } from '../controllers/foro.controller'

const router = Router();

router.route('/')
    .post(crearForo);

router.route('/:id')
    .get(obtenerForo)
    .delete(eliminarForo)
    .put(actualizarForo);

router.route('/:idAnime')
    .get(obtenerForos)

export default router;