import { Request, Response } from 'express'

// DB
import {executeSimpleQuery} from '../database'
import {simpleResponse} from "../utils";
// Interfaces

export async function obtenerComentarios(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idForo = ?', [req.params.idForo]);
    return simpleResponse(queryResult, res);
}

export async function crearComentario(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO comentario SET ? ', [req.body]);
    return simpleResponse(queryResult, res);
}

export async function actualizarComentario (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('UPDATE comentario SET ? WHERE idComentario = ?', [req.body, req.params.id]);
    return simpleResponse(queryResult, res);
}


export async function eliminarComentario (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM comentario WHERE idComentario = ?', [req.params.id]);
    return simpleResponse(queryResult, res);
}


export async function obtenerComentario(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idComentario = ?', [req.params.id]);
    return simpleResponse(queryResult, res);
}

export async function obtenerRespuestas(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM comentario where idComentarioPadre = ?', [req.params.id]);
    return simpleResponse(queryResult, res);
}