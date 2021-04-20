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
exports.eliminarCategoria = exports.anadirCategoria = exports.obtenerCategorias = exports.obtenerAnime = exports.eliminarAnime = exports.actualizarAnime = exports.crearAnime = exports.obtenerAnimes = void 0;
// DB
const database_1 = require("../database");
function obtenerAnimes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM anime');
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerAnimes = obtenerAnimes;
function crearAnime(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newAnime = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO anime SET ? ', [newAnime]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.crearAnime = crearAnime;
function actualizarAnime(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateAnime = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('UPDATE anime SET ? WHERE idAnime = ?', [updateAnime, id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.actualizarAnime = actualizarAnime;
function eliminarAnime(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM anime WHERE idAnime = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarAnime = eliminarAnime;
function obtenerAnime(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT * FROM anime where idAnime = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerAnime = obtenerAnime;
function obtenerCategorias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT c.idCategoria, c.nombre FROM anime as a INNER JOIN categoriaanime as ca ON a.idAnime=ca.idAnime INNER JOIN categoria as c ON ca.idCategoria=c.idCategoria WHERE a.idAnime = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerCategorias = obtenerCategorias;
function anadirCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoriaanime = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO categoriaanime SET ?', [categoriaanime]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.anadirCategoria = anadirCategoria;
function eliminarCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const idCategoria = req.params.idCategoria;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM categoriaanime where idAnime = ? AND idCategoria = ?', [id, idCategoria]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarCategoria = eliminarCategoria;
