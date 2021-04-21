import { Router } from 'express'
import {eliminarUsuario,eliminarFavoritos,actualizarUsuario,obtenerFavoritos,anadirFavoritos,obtenerUsuariosSeguidos,obtenerSeguidores} from '../controllers/usuario.controller'

const router = Router();



router.route('/:id')    
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