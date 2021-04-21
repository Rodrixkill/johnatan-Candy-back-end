import { Router } from 'express'
import {obtenerAnimes,  obtenerAnime, obtenerCategorias} from '../controllers/anime.controller'

const router = Router();

router.route('/')
    .get(obtenerAnimes);

router.route('/:id')
    .get(obtenerAnime);

router.route('/:id/categorias')
    .get(obtenerCategorias);



export default router;