"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foro_controller_1 = require("../controllers/foro.controller");
const router = express_1.Router();
router.route('/')
    .post(foro_controller_1.crearForo);
router.route('/:id')
    .get(foro_controller_1.obtenerForo)
    .delete(foro_controller_1.eliminarForo)
    .put(foro_controller_1.actualizarForo);
router.route('/:idAnime')
    .get(foro_controller_1.obtenerForos);
exports.default = router;
