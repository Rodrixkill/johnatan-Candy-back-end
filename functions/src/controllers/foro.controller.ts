import { Request, Response } from 'express'

// DB
import {executeSimpleQuery} from '../database'
// Interfaces

export async function obtenerForos(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM foro where idAnime = ?', [req.params.idAnime]);
    return res.json(queryResult);
}

export async function crearForo(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO foro SET ? ', [req.body]);
    return res.json(queryResult);
}

export async function actualizarForo (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('UPDATE foro SET ? WHERE idForo = ?', [req.body, req.params.id]);
    return res.json(queryResult);
}


export async function eliminarForo (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM foro WHERE idForo = ?', [req.params.id]);
    return res.json(queryResult);
}


export async function obtenerForo(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM foro where idForo = ?', [req.params.id]);
    return res.json(queryResult);
}