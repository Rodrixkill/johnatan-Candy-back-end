import { Router } from 'express'
import {obtenerComentarios, crearComentario, eliminarComentario, actualizarComentario, obtenerComentario, obtenerRespuestas } from '../controllers/comentario.controller'

const router = Router();

router.route('/')
    .post(crearComentario);

router.route('/:id')
    .get(obtenerComentario)
    .delete(eliminarComentario)
    .put(actualizarComentario);

router.route('/:id/respuestas')
    .get(obtenerRespuestas);

router.route('/:idForo')
    .get(obtenerComentarios)

export default router;