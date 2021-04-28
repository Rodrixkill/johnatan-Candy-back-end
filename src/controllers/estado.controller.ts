import { Request, Response } from 'express'

// DB
import {connect, executeSimpleQuery} from '../database'
// Interfaces
import { Estado } from '../interface/Estado'



export async function obtenerEstados(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('SELECT idEstado,nombre FROM estado', []);
    return res.json(queryResult);
}
