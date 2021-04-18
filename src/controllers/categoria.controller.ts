import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Categoria } from '../interface/Categoria'



export async function obtenerCategoria(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT idCategoria,nombre  FROM categoria WHERE idCategoria = ?', [id]);
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
        const posts = await conn.query('SELECT a.idAnime,a.nombre,a.sinopsis,a.nroEpisodios,a.estadoEmision,a.fechaEstreno,a.estudio,a.duracionMinutos,a.score,a.ranking,a.popularidad,a.nroFavoritos,a.image FROM Anime as a INNER JOIN CategoriaAnime ON  a.idAnime=CategoriaAnime.idAnime AND idCategoria = ?', [id]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
