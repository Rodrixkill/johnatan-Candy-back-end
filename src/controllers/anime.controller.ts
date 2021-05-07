import { Request, Response } from 'express'

// DB
import { connect, executeSimpleQuery } from '../database'
// Interfaces
import { Anime } from '../interface/Anime'

export async function obtenerAnimes(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM anime', []);
    return res.json(queryResult);
}

export async function buscarAnime(req: Request, res: Response): Promise<Response | void> {
    let searchVal: string= '%'+(req.params.search || '')+'%';
    let queryResult = await executeSimpleQuery('select * from anime WHERE nombre LIKE ? ;', [searchVal]);
    return res.json(queryResult);
}

export async function crearAnime(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO anime SET ? ', [req.body]);
    return res.json(queryResult);
}

export async function actualizarAnime (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('UPDATE anime SET ? WHERE idAnime = ?', [req.params.id, req.body]);
    return res.json(queryResult);
}


export async function eliminarAnime (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM anime WHERE idAnime = ?', [req.params.id]);
    return res.json(queryResult);
}


export async function obtenerAnime(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM anime where idAnime = ?', [req.params.id]);
    return res.json(queryResult);
}

export async function obtenerCategorias(req: Request, res: Response): Promise<Response | void> {
    let query = 'SELECT c.idCategoria, c.nombre FROM anime as a INNER JOIN categoriaanime as ca ON a.idAnime=ca.idAnime INNER JOIN categoria as c ON ca.idCategoria=c.idCategoria WHERE a.idAnime = ?';
    let queryResult = await executeSimpleQuery(query, [req.params.id]);
    return res.json(queryResult);
}

export async function anadirCategoria(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO categoriaanime SET ?', [req.body]);
    return res.json(queryResult);
}

export async function eliminarCategoria(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM categoriaanime where idAnime = ? AND idCategoria = ?', [req.params.id, req.params.idCategoria]);
    return res.json(queryResult);
}