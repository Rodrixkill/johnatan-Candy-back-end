import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { UsuarioAnime } from '../interface/UsuarioAnime'



export async function obtenerLista(req: Request, res: Response) {
    const id = req.params.idUsuario;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM Usuario as u INNER JOIN UsuarioAnime as ua ON u.idUsuario=ua.idUsuario AND ua.idUsuario = ? INNER JOIN Anime as a ON ua.idAnime=a.idAnime', [id]);
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
        const posts = await conn.query('INSERT INTO UsuarioAnime SET ? ', [lista]);
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
        const posts = await conn.query('DELETE FROM UsuarioAnime WHERE idUsuario = ? AND idAnime = ?', [idUsuario,idAnime]);
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
        const posts = await conn.query('UPDATE UsuarioAnime SET ? WHERE idUsuario = ? AND idAnime = ?', [lista,idUsuario,idAnime]);
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
        const posts = await conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.imagen,ua.idEstado,ua.porcentajeVisto,ua.fechaInicioVer FROM Usuario as u INNER JOIN UsuarioAnime as ua ON u.idUsuario=ua.idUsuario AND u.idUsuario = ? AND ua.idEstado = ? INNER JOIN Anime as a ON ua.idAnime=a.idAnime', [idUsuario,idEstado]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
