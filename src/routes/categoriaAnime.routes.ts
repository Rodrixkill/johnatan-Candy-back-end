import { Router } from 'express'
import {obtenerLista,anadirALaLista,eliminarDeLaLista,cambiarDeLaLista,obtenerAnimePorEstado} from '../controllers/categoriaAnime.controller'

const router = Router();

router.route('/:idUsuario')
    .get(obtenerLista)
    .post(anadirALaLista);

router.route('/:idUsuario/:idAnime')
    .delete(eliminarDeLaLista)
    .put(cambiarDeLaLista);

router.route('/:idUsuario/estado/:idEstado')
    .get(obtenerAnimePorEstado);

export default router;