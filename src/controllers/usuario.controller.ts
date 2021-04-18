import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Usuario } from '../interface/Usuario'



export async function obtenerUsuarios(req: Request, res: Response) {
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

export async function crearUsuario(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const results2 = await conn.query('DELETE FROM gestion WHERE ci = ?', [id]);
        const results = await conn.query('DELETE FROM Usuario WHERE ci = ?', [id]);
        res.json({
            message: results
        });
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function obtenerUsuario(req: Request, res: Response) {
    const id = req.params.id;
    const updateUsuario: Usuario = req.body;
    try {
        const conn = await connect();
        const results = await conn.query('UPDATE Usuario set ? WHERE ci = ?', [updateUsuario, id]);
        res.json({
            message: results
        });
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function eliminarUsuario(req: Request, res: Response) {
    const empresa = req.params.empresa;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM Usuario WHERE empresa = ?', [empresa]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function actualizarUsuario(req: Request, res: Response) {
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
export async function obtenerFavoritos(req: Request, res: Response) {
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
export async function anadirFavoritos(req: Request, res: Response) {
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
export async function obtenerUsuariosSeguidos(req: Request, res: Response) {
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

export async function obtenerSeguidores(req: Request, res: Response) {
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


