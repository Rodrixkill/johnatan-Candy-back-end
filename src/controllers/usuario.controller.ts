import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Usuario } from '../interface/Usuario'
import bcrypt from "bcryptjs";
const SECRET_KEY_HERE="jhonatanCandy";


export async function obtenerUsuarios(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM Usuario');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function crearUsuario(req: Request, res: Response) {
    let newUsuario: Usuario = req.body;
    try {
        newUsuario.password = await encrypt(newUsuario.password);
        const conn = await connect();
        const results = await conn.query('INSERT INTO Usuario SET ? ', [newUsuario]);
        res.json({
            message: results
        });
    }
    catch (e) {
        return res.json(e);
    }
}



export async function obtenerUsuario(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM Usuario WHERE idUsuario = ?', [id]);
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}

export async function eliminarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM Usuario WHERE idUsuario = ?', [id]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function actualizarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    const updateUsuario: Usuario = req.body;
    try {
        const conn = await connect();
        const results = await conn.query('UPDATE Usuario SET ? WHERE idUsuario = ?', [updateUsuario, id]);
        res.json({
            message: results
        });
    }
    catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function obtenerFavoritos(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT u.idUsuario,a.idAnime,a.nombre,a.sinopsis,a.imagen FROM Usuario as u INNER JOIN Favorito as f ON u.idUsuario=f.idUsuario AND f.idUsuario = ? INNER JOIN Anime as a ON f.idAnime=a.idAnime', [id]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function anadirFavoritos(req: Request, res: Response) {
    const favoritos = req.body;
    try {
        const conn = await connect();
        const posts = await conn.query('INSERT INTO Favorito SET ?', [favoritos]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}
export async function eliminarFavoritos(req: Request, res: Response) {
    const idUsuario = req.params.idUsuario;
    const idAnime = req.params.idAnime;
    try {
        const conn = await connect();
        const posts = await conn.query('DELETE FROM Favorito WHERE idUsuario=? AND idAnime=?', [idUsuario,idAnime]);
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
        const posts = await conn.query('SELECT u.idUsuario,u.nombre,u.username FROM Usuario as u,Follow as f WHERE f.idSeguidor = ? AND f.idSeguido=u.idUsuario', [id]);
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
        const posts = await conn.query('SELECT u.idUsuario,u.nombre,u.username FROM Usuario as u,Follow as f WHERE f.idSeguido = ? AND f.idSeguidor=u.idUsuario', [id]);
        res.json(posts[0]);
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
}

async function encrypt(pass: string): Promise<string>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
 }
 
 async function validate(pass: string,sql: string): Promise<boolean> {
    console.log(pass);
    console.log(sql);
    return await bcrypt.compare(pass, sql);
  };
