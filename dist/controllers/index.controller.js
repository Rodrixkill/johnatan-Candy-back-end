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
exports.crearUsuario = exports.indexWelcome = void 0;
const webToken_1 = require("../jwt-simple/webToken");
const database_1 = require("../database");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SECRET_KEY_HERE = "jhonatanCandy";
function indexWelcome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var username = req.body.username;
        var password = req.body.password;
        console.log(username);
        console.log(password);
        const prueba = yield encrypt("password");
        if (username && password) {
            try {
                const conn = yield database_1.connect();
                const results = yield conn.query('SELECT * FROM usuario WHERE username = ?', username);
                console.log(results[0][0]);
                if (results[0].length > 0) {
                    const validatePass = yield validate(password, results[0][0].password);
                    console.log(validatePass);
                    if (validatePass) {
                        const session = webToken_1.encodeSession(SECRET_KEY_HERE, {
                            username: username
                        });
                        return res.status(201).json([session]);
                    }
                    else {
                        return res.json('Contraseña incorrecta');
                    }
                }
                else {
                    return res.json('No existe el usuario');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            return res.json('Complete username and password');
        }
    });
}
exports.indexWelcome = indexWelcome;
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
