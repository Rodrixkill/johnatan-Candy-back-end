import { Router } from 'express'
import {obtenerLista,anadirALaLista,eliminarDeLaLista,cambiarDeLaLista,obtenerAnimePorEstado,animeEnLista} from '../controllers/usuarioAnime.controller'

const router = Router();

router.route('/:idUsuario')
    .get(obtenerLista)
    .post(anadirALaLista);

router.route('/:idUsuario/:idAnime')
    .delete(eliminarDeLaLista)
    .put(cambiarDeLaLista);

router.route('/exists/:idUsuario/:idAnime')
    .get(animeEnLista);

router.route('/:idUsuario/estado/:idEstado')
    .get(obtenerAnimePorEstado);

export default router;