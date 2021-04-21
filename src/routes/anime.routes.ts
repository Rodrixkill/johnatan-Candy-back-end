import { Router } from 'express'
import { crearAnime, eliminarAnime, actualizarAnime, anadirCategoria,eliminarCategoria} from '../controllers/anime.controller'

const router = Router();

router.route('/')
    .post(crearAnime);

router.route('/:id')
    .delete(eliminarAnime)
    .put(actualizarAnime);

router.route('/:id/categorias')
    .post(anadirCategoria);

router.route('/:id/categorias/:idCategoria')
    .delete(eliminarCategoria);

export default router;