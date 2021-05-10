import { Router } from 'express'
import {obtenerEstados} from '../controllers/estado.controller'

const router = Router();

router.route('/')
    .get(obtenerEstados);

export default router;