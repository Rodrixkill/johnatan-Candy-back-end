import { Request, Response } from 'express'

// DB
import {connect, executeSimpleQuery} from '../database'
// Interfaces
import { Comentario } from '../interface/Comentario'

export async function obtenerComentarios(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idForo = ?', [req.params.idForo]);
    return res.json(queryResult);
}

export async function crearComentario(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO comentario SET ? ', [req.body]);
    return res.json(queryResult);
}

export async function actualizarComentario (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('UPDATE comentario SET ? WHERE idComentario = ?', [req.body, req.params.id]);
    return res.json(queryResult);
}


export async function eliminarComentario (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM comentario WHERE idComentario = ?', [req.params.id]);
    return res.json(queryResult);
}


export async function obtenerComentario(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idComentario = ?', [req.params.id]);
    return res.json(queryResult);
}

export async function obtenerRespuestas(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idComentarioPadre = ?', [req.params.id]);
    return res.json(queryResult);
}