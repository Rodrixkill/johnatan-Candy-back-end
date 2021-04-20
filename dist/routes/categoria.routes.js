"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = express_1.Router();
router.route('/:id')
    .get(categoria_controller_1.obtenerCategoria);
router.route('/:id/animes')
    .get(categoria_controller_1.obtenerAnimesCategoria);
exports.default = router;
