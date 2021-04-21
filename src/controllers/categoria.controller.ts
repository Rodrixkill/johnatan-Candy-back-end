import { Request, Response } from "express";

// DB
import { connect } from "../database";
// Interfaces
import { Categoria } from "../interface/Categoria";

export async function obtenerCategorias(req: Request, res: Response) {
  try {
    const conn = await connect();
    const posts = await conn.query("SELECT idCategoria,nombre  FROM categoria");
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function obtenerCategoria(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT idCategoria,nombre  FROM categoria WHERE idCategoria = ?', [id]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function obtenerAnimesCategoria(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT a.idAnime,a.nombre,a.sinopsis,a.nroEpisodios,a.estadoEmision,a.fechaEstreno,a.estudio,a.duracionMinutos,a.score,a.ranking,a.popularidad,a.nroFavoritos,a.imagen FROM anime as a INNER JOIN categoriaanime ON  a.idAnime=categoriaanime.idAnime AND idCategoria = ?', [id]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }

}