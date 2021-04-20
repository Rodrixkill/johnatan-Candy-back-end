"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerRespuestas = exports.obtenerComentario = exports.eliminarComentario = exports.actualizarComentario = exports.crearComentario = exports.obtenerComentarios = void 0;
// DB
const database_1 = require("../database");
function obtenerComentarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idForo = req.params.idForo;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM comentario where idForo = ?', [idForo]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerComentarios = obtenerComentarios;
function crearComentario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newComentario = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO comentario SET ? ', [newComentario]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.crearComentario = crearComentario;
function actualizarComentario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateComentario = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('UPDATE comentario SET ? WHERE idComentario = ?', [updateComentario, id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.actualizarComentario = actualizarComentario;
function eliminarComentario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM comentario WHERE idComentario = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarComentario = eliminarComentario;
function obtenerComentario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM comentario where idComentario = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerComentario = obtenerComentario;
function obtenerRespuestas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM comentario where idComentarioPadre = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerRespuestas = obtenerRespuestas;
