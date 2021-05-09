import { Router } from 'express'
import {obtenerForos, obtenerForo } from '../controllers/foro.controller'

const router = Router();


router.route('/:id')
    .get(obtenerForo);

router.route('/:idAnime')
    .get(obtenerForos);

export default router;