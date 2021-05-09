import { Request, Response } from 'express'

// DB
import {executeSimpleQuery} from '../database'
// Interfaces



export async function obtenerLista(req: Request, res: Response) {
    let query = 'SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND ua.idUsuario = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime';
    let queryResult = await executeSimpleQuery(query, [req.params.idUsuario]);
    return res.json(queryResult);
}

export async function anadirALaLista(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('INSERT INTO usuarioanime SET ? ', [req.body]);
    return res.json(queryResult);
}

export async function eliminarDeLaLista(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('DELETE FROM usuarioanime WHERE idUsuario = ? AND idAnime = ?', [req.params.idUsuario, req.params.idAnime]);
    return res.json(queryResult);
}

export async function cambiarDeLaLista(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('UPDATE usuarioanime SET ? WHERE idUsuario = ? AND idAnime = ?', [req.body, req.params.idUsuario, req.params.idAnime]);
    return res.json(queryResult);
}

export async function obtenerAnimePorEstado(req: Request, res: Response) {
    let query = 'SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND u.idUsuario = ? AND ua.idEstado = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime';
    let queryResult = await executeSimpleQuery(query, [req.params.idUsuario, req.params.idEstado]);
    return res.json(queryResult);
}

export async function animeEnLista(req: Request, res: Response) {
    let queryResult = await executeSimpleQuery('SELECT idUsuario,idAnime,idEstado,porcentajeVisto,fechaInicioVer FROM usuarioanime WHERE idUsuario= ? and idAnime= ?;', [req.params.idUsuario, req.params.idAnime]);
    return res.json(queryResult);
}
