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
exports.obtenerForo = exports.eliminarForo = exports.actualizarForo = exports.crearForo = exports.obtenerForos = void 0;
// DB
const database_1 = require("../database");
function obtenerForos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idAnime = req.params.idAnime;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM foro where idAnime = ?', [idAnime]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerForos = obtenerForos;
function crearForo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newForo = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO foro SET ? ', [newForo]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.crearForo = crearForo;
function actualizarForo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateForo = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('UPDATE foro SET ? WHERE idForo = ?', [updateForo, id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.actualizarForo = actualizarForo;
function eliminarForo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM foro WHERE idForo = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarForo = eliminarForo;
function obtenerForo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM foro where idForo = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerForo = obtenerForo;
