"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
router.route('/')
    .post(index_controller_1.indexWelcome);
exports.default = router;