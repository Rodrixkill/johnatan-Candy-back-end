import { Request, Response } from 'express'

// DB
import {executeSimpleQuery} from '../database'
// Interfaces



export async function obtenerEstados(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('SELECT idEstado,nombre FROM estado', []);
    return res.json(queryResult);
}
