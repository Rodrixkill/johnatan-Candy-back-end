import { Request, Response } from "express";

// DB
import {executeSimpleQuery} from "../database";
import {simpleResponse} from "../utils";
// Interfaces

export async function obtenerCategorias(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('SELECT idCategoria,nombre  FROM categoria', []);
  return simpleResponse(queryResult, res);
}

export async function obtenerCategoria(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('SELECT idCategoria,nombre  FROM categoria WHERE idCategoria = ?', [req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function obtenerAnimesCategoria(req: Request, res: Response) {
  let query = 'SELECT a.idAnime,a.nombre,a.sinopsis,a.nroEpisodios,a.estadoEmision,a.fechaEstreno,a.estudio,a.duracionMinutos,a.score,a.ranking,a.popularidad,a.nroFavoritos,a.imagen FROM anime as a INNER JOIN categoriaanime ON  a.idAnime=categoriaanime.idAnime AND idCategoria = ?';
  let queryResult = await executeSimpleQuery(query, [req.params.id]);
  return simpleResponse(queryResult, res);
}