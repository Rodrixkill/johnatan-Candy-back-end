"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_controller_1 = require("../controllers/estado.controller");
const router = express_1.Router();
router.route('/')
    .get(estado_controller_1.obtenerEstados);
exports.default = router;
