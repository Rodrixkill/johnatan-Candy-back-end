import { Router } from 'express'
import {obtenerUsuarios,crearUsuario,obtenerUsuario,eliminarUsuario,eliminarFavoritos,actualizarUsuario,obtenerFavoritos,anadirFavoritos,obtenerUsuariosSeguidos,obtenerSeguidores} from '../controllers/usuario.controller'

const router = Router();

router.route('/')
    .get(obtenerUsuarios)
    .post(crearUsuario);

router.route('/:id')
    .get(obtenerUsuario)
    .delete(eliminarUsuario)
    .put(actualizarUsuario);

router.route('/:id/favoritos')
    .get(obtenerFavoritos);

router.route('/:idUsuario/favoritos/:idAnime')
    .delete(eliminarFavoritos);

router.route('/favoritos')
    .post(anadirFavoritos);

router.route('/:id/seguidos')
    .get(obtenerUsuariosSeguidos);

router.route('/:id/seguidores')
    .get(obtenerSeguidores);


export default router;