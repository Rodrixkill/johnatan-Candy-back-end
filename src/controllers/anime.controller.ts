import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Anime } from '../interface/Anime'

export async function obtenerAnimes(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM Anime');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function crearAnime(req: Request, res: Response): Promise<Response | void> {
    let newAnime: Anime = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('INSERT INTO Anime SET ? ', [newAnime]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function actualizarAnime (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    const updateAnime: Anime = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('UPDATE Anime SET ? WHERE idAnime = ?', [updateAnime, id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function eliminarAnime (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM Anime WHERE idAnime = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function obtenerAnime(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM Anime where idAnime = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function obtenerCategorias(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT c.idCategoria, c.nombre FROM Anime as a INNER JOIN CategoriaAnime as ca ON a.idAnime=ca.idAnime INNER JOIN Categoria as c ON ca.idCategoria=c.idCategoria WHERE a.idAnime = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}