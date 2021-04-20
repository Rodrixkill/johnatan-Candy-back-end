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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const trabajador_routes_1 = __importDefault(require("./routes/trabajador.routes"));
const contrasena_routes_1 = __importDefault(require("./routes/contrasena.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const estado_routes_1 = __importDefault(require("./routes/estado.routes"));
const usuarioAnime_routes_1 = __importDefault(require("./routes/usuarioAnime.routes"));
const anime_routes_1 = __importDefault(require("./routes/anime.routes"));
const foro_routes_1 = __importDefault(require("./routes/foro.routes"));
const comentario_routes_1 = __importDefault(require("./routes/comentario.routes"));
const cors_1 = __importDefault(require("cors"));
// middleware
const customMiddleware_1 = require("./jwt-simple/customMiddleware");
class App {
    constructor(port) {
        this.port = port;
        this.express = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.express.set('port', this.port || process.env.PORT || 8443);
    }
    middlewares() {
        this.express.use(cors_1.default({
            allowedHeaders: ['X-JWT-Token', 'Content-Type', 'access-control-allow-headers', 'Content-length'],
            exposedHeaders: ['X-JWT-Token', 'X-Renewed-JWT-Token'],
            methods: ['POST', 'GET', 'DELETE', 'PUT']
        }));
        this.express.use(morgan_1.default('dev'));
        this.express.use(express_1.default.json());
    }
    routes() {
        this.express.use('/usuario', customMiddleware_1.requireJwtMiddleware);
        this.express.use('/trabajador', customMiddleware_1.requireJwtMiddleware);
        this.express.use('/categoria', customMiddleware_1.requireJwtMiddleware);
        this.express.use('/estado', customMiddleware_1.requireJwtMiddleware);
        this.express.use('/lista', customMiddleware_1.requireJwtMiddleware);
        this.express.use(index_routes_1.default);
        this.express.use('/contrasena', contrasena_routes_1.default);
        this.express.use('/trabajador', trabajador_routes_1.default);
        this.express.use('/usuario', usuario_routes_1.default);
        this.express.use('/categoria', categoria_routes_1.default);
        this.express.use('/estado', estado_routes_1.default);
        this.express.use('/lista', usuarioAnime_routes_1.default);
        this.express.use('/anime', anime_routes_1.default);
        this.express.use('/foro', foro_routes_1.default);
        this.express.use('/comentario', comentario_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.express.listen(this.express.get("port"));
            console.log(`Servidor corriendo en el puerto ${this.express.get("port")}`);
        });
    }
}
exports.App = App;
