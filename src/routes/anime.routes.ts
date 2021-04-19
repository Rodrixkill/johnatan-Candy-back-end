import { Router } from 'express'
import {obtenerAnimes, crearAnime, eliminarAnime, actualizarAnime, obtenerAnime, obtenerCategorias} from '../controllers/anime.controller'

const router = Router();

router.route('/')
    .get(obtenerAnimes)
    .post(crearAnime);

router.route('/:id')
    .get(obtenerAnime)
    .delete(eliminarAnime)
    .put(actualizarAnime);

router.route('/:id/categorias')
    .delete(obtenerCategorias);

export default router;