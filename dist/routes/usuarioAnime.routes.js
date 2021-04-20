"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioAnime_controller_1 = require("../controllers/usuarioAnime.controller");
const router = express_1.Router();
router.route('/:idUsuario')
    .get(usuarioAnime_controller_1.obtenerLista)
    .post(usuarioAnime_controller_1.anadirALaLista);
router.route('/:idUsuario/:idAnime')
    .delete(usuarioAnime_controller_1.eliminarDeLaLista)
    .put(usuarioAnime_controller_1.cambiarDeLaLista);
router.route('/:idUsuario/estado/:idEstado')
    .get(usuarioAnime_controller_1.obtenerAnimePorEstado);
exports.default = router;
