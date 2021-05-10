import { Request, Response } from 'express'

// DB
import {executeSimpleQuery} from '../database'
import {simpleResponse} from "../utils";
// Interfaces



export async function obtenerEstados(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('SELECT idEstado,nombre FROM estado', []);
    return simpleResponse(queryResult, res);
}
