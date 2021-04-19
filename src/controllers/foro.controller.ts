import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Foro } from '../interface/Foro'

export async function obtenerForos(req: Request, res: Response): Promise<Response | void> {
    const idAnime = req.params.idAnime;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM Foro where idAnime = ?', [idAnime]);
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
        const posts = await conn.query('INSERT INTO Foro SET ? ', [newForo]);
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
        const posts = await conn.query('UPDATE Foro SET ? WHERE idForo = ?', [updateForo, id]);
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
        const posts = await conn.query('DELETE FROM Foro WHERE idForo = ?', [id]);
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
        const posts = await conn.query('SELECT * FROM Foro where idForo = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}