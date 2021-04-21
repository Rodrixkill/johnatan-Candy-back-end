import { Router } from 'express'
import { crearComentario, eliminarComentario, actualizarComentario } from '../controllers/comentario.controller'

const router = Router();

router.route('/')
    .post(crearComentario);

router.route('/:id')
    .delete(eliminarComentario)
    .put(actualizarComentario);


export default router;