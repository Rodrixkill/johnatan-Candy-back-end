import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Estado } from '../interface/Estado'



export async function obtenerEstados(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT *  FROM Usuario WHERE ci = ?', [id]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
