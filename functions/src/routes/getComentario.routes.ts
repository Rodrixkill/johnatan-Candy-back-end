import { Router } from 'express'
import {obtenerComentarios,obtenerComentario, obtenerRespuestas } from '../controllers/comentario.controller'

const router = Router();


router.route('/:id')
    .get(obtenerComentario);

router.route('/:id/respuestas')
    .get(obtenerRespuestas);

router.route('/:idForo/foro')
    .get(obtenerComentarios)

export default router;