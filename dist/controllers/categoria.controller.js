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
exports.obtenerAnimesCategoria = exports.obtenerCategoria = void 0;
// DB
const database_1 = require("../database");
function obtenerCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT idCategoria,nombre  FROM categoria WHERE idCategoria = ?', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerCategoria = obtenerCategoria;
function obtenerAnimesCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const conn = yield database_1.connect();
            const posts = yield conn.query('SELECT a.idAnime,a.nombre,a.sinopsis,a.nroEpisodios,a.estadoEmision,a.fechaEstreno,a.estudio,a.duracionMinutos,a.score,a.ranking,a.popularidad,a.nroFavoritos,a.imagen FROM anime as a INNER JOIN categoriaanime ON  a.idAnime=categoriaanime.idAnime AND idCategoria = ?', [id]);
            res.json(posts[0]);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    });
}
exports.obtenerAnimesCategoria = obtenerAnimesCategoria;
