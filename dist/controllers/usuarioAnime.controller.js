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
exports.obtenerAnimePorEstado = exports.cambiarDeLaLista = exports.eliminarDeLaLista = exports.anadirALaLista = exports.obtenerLista = void 0;
// DB
const database_1 = require("../database");
function obtenerLista(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.idUsuario;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND ua.idUsuario = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerLista = obtenerLista;
function anadirALaLista(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const lista = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO usuarioanime SET ? ', [lista]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.anadirALaLista = anadirALaLista;
function eliminarDeLaLista(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idUsuario = req.params.idUsuario;
        const idAnime = req.params.idAnime;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM usuarioanime WHERE idUsuario = ? AND idAnime = ?', [idUsuario, idAnime]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarDeLaLista = eliminarDeLaLista;
function cambiarDeLaLista(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idUsuario = req.params.idUsuario;
        const idAnime = req.params.idAnime;
        const lista = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('UPDATE usuarioanime SET ? WHERE idUsuario = ? AND idAnime = ?', [lista, idUsuario, idAnime]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.cambiarDeLaLista = cambiarDeLaLista;
function obtenerAnimePorEstado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idUsuario = req.params.idUsuario;
        const idEstado = req.params.idEstado;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND u.idUsuario = ? AND ua.idEstado = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime', [idUsuario, idEstado]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerAnimePorEstado = obtenerAnimePorEstado;
