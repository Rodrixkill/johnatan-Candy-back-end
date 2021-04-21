import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { UsuarioAnime } from '../interface/UsuarioAnime'



export async function obtenerLista(req: Request, res: Response) {
    const id = req.params.idUsuario;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND ua.idUsuario = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime', [id]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function anadirALaLista(req: Request, res: Response) {
    const lista: UsuarioAnime= req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('INSERT INTO usuarioanime SET ? ', [lista]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function eliminarDeLaLista(req: Request, res: Response) {
    const idUsuario = req.params.idUsuario;
    const idAnime= req.params.idAnime;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM usuarioanime WHERE idUsuario = ? AND idAnime = ?', [idUsuario,idAnime]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function cambiarDeLaLista(req: Request, res: Response) {
    const idUsuario = req.params.idUsuario;
    const idAnime= req.params.idAnime;
    const lista: UsuarioAnime= req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('UPDATE usuarioanime SET ? WHERE idUsuario = ? AND idAnime = ?', [lista,idUsuario,idAnime]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function obtenerAnimePorEstado(req: Request, res: Response) {
    const idUsuario = req.params.idUsuario;
    const idEstado = req.params.idEstado;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM usuario as u INNER JOIN usuarioanime as ua ON u.idUsuario=ua.idUsuario AND u.idUsuario = ? AND ua.idEstado = ? INNER JOIN anime as a ON ua.idAnime=a.idAnime', [idUsuario,idEstado]);
        conn.end();
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
