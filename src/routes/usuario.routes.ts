import { Router } from 'express'
import {obtenerUsuario,eliminarUsuario,eliminarFavoritos,actualizarUsuario,obtenerFavoritos,anadirFavoritos,obtenerUsuariosSeguidos,obtenerSeguidores,eliminarFollow,addFollow} from '../controllers/usuario.controller'

const router = Router();

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

router.route('/:id/:idS')
    .delete(eliminarFollow)
    .post(addFollow);

export default router;