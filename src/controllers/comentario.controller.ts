import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Comentario } from '../interface/Comentario'

export async function obtenerComentarios(req: Request, res: Response): Promise<Response | void> {
    const idForo = req.params.idForo;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM comentario where idForo = ?', [idForo]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function crearComentario(req: Request, res: Response): Promise<Response | void> {
    let newComentario: Comentario = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('INSERT INTO comentario SET ? ', [newComentario]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function actualizarComentario (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    const updateComentario: Comentario = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('UPDATE comentario SET ? WHERE idComentario = ?', [updateComentario, id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function eliminarComentario (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM comentario WHERE idComentario = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function obtenerComentario(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM comentario where idComentario = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function obtenerRespuestas(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM comentario where idComentarioPadre = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}