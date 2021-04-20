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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerSeguidores = exports.obtenerUsuariosSeguidos = exports.eliminarFavoritos = exports.anadirFavoritos = exports.obtenerFavoritos = exports.actualizarUsuario = exports.eliminarUsuario = exports.obtenerUsuario = exports.crearUsuario = exports.obtenerUsuarios = void 0;
// DB
const database_1 = require("../database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SECRET_KEY_HERE = "jhonatanCandy";
function obtenerUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM usuario');
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerUsuarios = obtenerUsuarios;
function crearUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let newUsuario = req.body;
        try {
            newUsuario.password = yield encrypt(newUsuario.password);
            const conn = yield database_1.connect();
            const results = yield conn.query('INSERT INTO usuario SET ? ', [newUsuario]);
            console.log(results);
            return res.json({
                message: results
            });
        }
        catch (e) {
            return res.json(e);
        }
    });
}
exports.crearUsuario = crearUsuario;
function obtenerUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM usuario WHERE idUsuario = ?', [id]);
            return res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerUsuario = obtenerUsuario;
function eliminarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM usuario WHERE idUsuario = ?', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarUsuario = eliminarUsuario;
function actualizarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateUsuario = req.body;
        try {
            updateUsuario.password = yield encrypt(updateUsuario.password);
            const conn = yield database_1.connect();
            const results = yield conn.query('UPDATE usuario SET ? WHERE idUsuario = ?', [updateUsuario, id]);
            res.json({
                message: results
            });
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.actualizarUsuario = actualizarUsuario;
function obtenerFavoritos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.sinopsis,a.imagen FROM usuario as u INNER JOIN favorito as f ON u.idUsuario=f.idUsuario AND f.idUsuario = ? INNER JOIN anime as a ON f.idAnime=a.idAnime', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerFavoritos = obtenerFavoritos;
function anadirFavoritos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const favoritos = req.body;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('INSERT INTO favorito SET ?', [favoritos]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.anadirFavoritos = anadirFavoritos;
function eliminarFavoritos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idUsuario = req.params.idUsuario;
        const idAnime = req.params.idAnime;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('DELETE FROM favorito WHERE idUsuario=? AND idAnime=?', [idUsuario, idAnime]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.eliminarFavoritos = eliminarFavoritos;
function obtenerUsuariosSeguidos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguidor = ? AND f.idSeguido=u.idUsuario', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerUsuariosSeguidos = obtenerUsuariosSeguidos;
function obtenerSeguidores(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguido = ? AND f.idSeguidor=u.idUsuario', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerSeguidores = obtenerSeguidores;
function encrypt(pass) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcryptjs_1.default.genSalt(10);
        return yield bcryptjs_1.default.hash(pass, salt);
    });
}
function validate(pass, sql) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(pass);
        console.log(sql);
        return yield bcryptjs_1.default.compare(pass, sql);
    });
}
;
