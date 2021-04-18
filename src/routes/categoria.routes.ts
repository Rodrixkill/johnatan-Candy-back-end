import { Router } from 'express'
import {obtenerCategoria,obtenerAnimesCategoria} from '../controllers/categoria.controller'

const router = Router();

router.route('/:id')
    .get(obtenerCategoria);

router.route('/:id/animes')
    .get(obtenerAnimesCategoria);

export default router;