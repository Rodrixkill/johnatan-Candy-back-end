import express, { Application } from 'express'
import morgan from 'morgan'
import https, { Server } from 'https'
import fs from 'fs'

// Routes
import GetAnimeRoutes from './routes/getAnime.routes'
import GetComentarioRoutes from './routes/getComentario.routes'
import GetForoRoutes from './routes/getForo.routes'
import GetUsuarioRoutes from './routes/getUsuario.routes'

import IndexRoutes from './routes/index.routes'
import ContrasenaRoutes from './routes/contrasena.routes'
import UsuarioRoutes from './routes/usuario.routes'
import CategoriaRoutes from './routes/categoria.routes'
import EstadoRoutes from './routes/estado.routes'
import UsuarioAnimeRoutes from './routes/usuarioAnime.routes'

import AnimeRoutes from './routes/anime.routes'
import ForoRoutes from './routes/foro.routes'
import ComentarioRoutes from './routes/comentario.routes'
import cors from 'cors'
// middleware
import { requireJwtMiddleware } from './jwt-simple/customMiddleware'
import util from 'util'
import { server } from 'typescript'

export class App {
    app: https.Server | undefined;
    express: Application;
    key: any;
    cert: any;

    constructor(
        private port?: number | string
    ) {
        this.express = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.express.set('port', this.port || process.env.PORT || 8443);
    }

    private middlewares() {
        this.express.use(cors({
            allowedHeaders: ['X-JWT-Token', 'Content-Type', 'access-control-allow-headers', 'Content-length'],
            exposedHeaders: ['X-JWT-Token', 'X-Renewed-JWT-Token'],
            methods: ['POST', 'GET', 'DELETE', 'PUT']
        }));
        this.express.use(morgan('dev'));
        this.express.use(express.json());
    }

    private routes() {
        this.express.use('/usuario', requireJwtMiddleware);
        this.express.use('/lista', requireJwtMiddleware);
        this.express.use('/anime', requireJwtMiddleware);
        this.express.use('/foro', requireJwtMiddleware);
        this.express.use('/comentario', requireJwtMiddleware);
        this.express.use(IndexRoutes);
    
        this.express.use('/contrasena', ContrasenaRoutes);
        this.express.use('/usuario', UsuarioRoutes);
        this.express.use('/categoria', CategoriaRoutes);
        this.express.use('/estado', EstadoRoutes);
        this.express.use('/lista', UsuarioAnimeRoutes);
        this.express.use('/anime', AnimeRoutes);
        this.express.use('/foro', ForoRoutes);
        this.express.use('/comentario', ComentarioRoutes);
        this.express.use('/getAnime', GetAnimeRoutes);
        this.express.use('/getForo', GetForoRoutes);
        this.express.use('/getcomentario', GetComentarioRoutes);
        this.express.use('/getUsuario', GetUsuarioRoutes);
    }

    public async listen() {
        await this.express.listen(this.express.get("port"));
        console.log(`Servidor corriendo en el puerto ${this.express.get("port")}`);        
    }

}



