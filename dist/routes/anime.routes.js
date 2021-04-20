"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anime_controller_1 = require("../controllers/anime.controller");
const router = express_1.Router();
router.route('/')
    .get(anime_controller_1.obtenerAnimes)
    .post(anime_controller_1.crearAnime);
router.route('/:id')
    .get(anime_controller_1.obtenerAnime)
    .delete(anime_controller_1.eliminarAnime)
    .put(anime_controller_1.actualizarAnime);
router.route('/:id/categorias')
    .post(anime_controller_1.anadirCategoria)
    .get(anime_controller_1.obtenerCategorias);
router.route('/:id/categorias/:idCategoria')
    .delete(anime_controller_1.eliminarCategoria);
exports.default = router;
