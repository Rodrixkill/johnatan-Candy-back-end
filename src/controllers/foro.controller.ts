import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Foro } from '../interface/Foro'

export async function obtenerForos(req: Request, res: Response): Promise<Response | void> {
    const idAnime = req.params.idAnime;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM foro where idAnime = ?', [idAnime]);
        conn.end();
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function crearForo(req: Request, res: Response): Promise<Response | void> {
    let newForo: Foro = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('INSERT INTO foro SET ? ', [newForo]);
        conn.end();
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function actualizarForo (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    const updateForo: Foro = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('UPDATE foro SET ? WHERE idForo = ?', [updateForo, id]);
        conn.end();
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function eliminarForo (req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM foro WHERE idForo = ?', [id]);
        conn.end();
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}


export async function obtenerForo(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM foro where idForo = ?', [id]);
        conn.end();
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}