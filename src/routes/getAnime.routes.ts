import { Router } from 'express'
import {obtenerAnimes, obtenerAnime, obtenerCategorias, buscarAnime} from '../controllers/anime.controller'

const router = Router();

router.route('/')
    .get(obtenerAnimes);

router.route('/:id')
    .get(obtenerAnime);

router.route('/:id/categorias')
    .get(obtenerCategorias);

router.route('/find/:search')
  .get(buscarAnime);



export default router;