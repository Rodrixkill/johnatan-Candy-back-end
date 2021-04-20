"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.Router();
router.route('/')
    .get(usuario_controller_1.obtenerUsuarios)
    .post(usuario_controller_1.crearUsuario);
router.route('/:id')
    .get(usuario_controller_1.obtenerUsuario)
    .delete(usuario_controller_1.eliminarUsuario)
    .put(usuario_controller_1.actualizarUsuario);
router.route('/:id/favoritos')
    .get(usuario_controller_1.obtenerFavoritos);
router.route('/:idUsuario/favoritos/:idAnime')
    .delete(usuario_controller_1.eliminarFavoritos);
router.route('/favoritos')
    .post(usuario_controller_1.anadirFavoritos);
router.route('/:id/seguidos')
    .get(usuario_controller_1.obtenerUsuariosSeguidos);
router.route('/:id/seguidores')
    .get(usuario_controller_1.obtenerSeguidores);
exports.default = router;
