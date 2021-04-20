"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentario_controller_1 = require("../controllers/comentario.controller");
const router = express_1.Router();
router.route('/')
    .post(comentario_controller_1.crearComentario);
router.route('/:id')
    .get(comentario_controller_1.obtenerComentario)
    .delete(comentario_controller_1.eliminarComentario)
    .put(comentario_controller_1.actualizarComentario);
router.route('/:id/respuestas')
    .get(comentario_controller_1.obtenerRespuestas);
router.route('/:idForo/foro')
    .get(comentario_controller_1.obtenerComentarios);
exports.default = router;
