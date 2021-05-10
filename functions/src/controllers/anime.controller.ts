import { Request, Response } from 'express'
import {executeSimpleQuery} from "../database";
import {simpleResponse} from "../utils";

// DB
// Interfaces

export async function obtenerAnimes(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('SELECT * FROM anime', []);
    return simpleResponse(queryResult, res);
}

export async function buscarAnime(req: Request, res: Response): Promise<Response | void> {
    let searchVal: string= '%'+(req.params.search || '')+'%';
    let queryResult = await executeSimpleQuery('select * from anime WHERE nombre LIKE ? ;', [searchVal]);
    return simpleResponse(queryResult, res);
}

export async function crearAnime(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO anime SET ? ', [req.body]);
    return simpleResponse(queryResult, res);
}

export async function actualizarAnime (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('UPDATE anime SET ? WHERE idAnime = ?', [req.params.id, req.body]);
    return simpleResponse(queryResult, res);
}


export async function eliminarAnime (req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM anime WHERE idAnime = ?', [req.params.id]);
    return simpleResponse(queryResult, res);
}

export async function obtenerAnime(req: Request, res: Response): Promise<Response | void> {
    if (Number.isNaN(Number(req.params.id))) {
        return res.status(400).json(`El parametro debe ser un numero: [${req.params.id}]`)
    }
    let queryResult = await executeSimpleQuery('SELECT * FROM anime where idAnime = ?', [req.params.id]);

    if (queryResult.error) {
        return res.status(500).json(`Error en el servidor`)
    } else if (queryResult.data.length == 0) {
        return res.status(404).json(`No se encontro un anime con el id: [${req.params.id}]`)
    } else {
        return res.status(200).json(queryResult.data);
    }
}

export async function obtenerCategorias(req: Request, res: Response): Promise<Response | void> {
    let query = 'SELECT c.idCategoria, c.nombre FROM anime as a INNER JOIN categoriaanime as ca ON a.idAnime=ca.idAnime INNER JOIN categoria as c ON ca.idCategoria=c.idCategoria WHERE a.idAnime = ?';
    let queryResult = await executeSimpleQuery(query, [req.params.id]);
    return simpleResponse(queryResult, res);
}

export async function anadirCategoria(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('INSERT INTO categoriaanime SET ?', [req.body]);
    return simpleResponse(queryResult, res);
}

export async function eliminarCategoria(req: Request, res: Response): Promise<Response | void> {
    let queryResult = await executeSimpleQuery('DELETE FROM categoriaanime where idAnime = ? AND idCategoria = ?', [req.params.id, req.params.idCategoria]);
    return simpleResponse(queryResult, res);
}