import { Router } from 'express'
import {obtenerAnimes, crearAnime, eliminarAnime, actualizarAnime, obtenerAnime, obtenerCategorias,anadirCategoria,eliminarCategoria} from '../controllers/anime.controller'

const router = Router();

router.route('/')
    .get(obtenerAnimes)
    .post(crearAnime);

router.route('/:id')
    .get(obtenerAnime)
    .delete(eliminarAnime)
    .put(actualizarAnime);

router.route('/:id/categorias')
    .post(anadirCategoria)
    .get(obtenerCategorias);

router.route('/:id/categorias/:idCategoria')
    .delete(eliminarCategoria);

export default router;