import { Request, Response } from "express";

// DB
import { connect } from "../database";
// Interfaces
import { Usuario } from "../interface/Usuario";
import bcrypt from "bcryptjs";
const SECRET_KEY_HERE = "jhonatanCandy";

export async function obtenerUsuarios(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const posts = await conn.query(
      "SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM usuario"
    );
    conn.end();
    return res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}

export async function crearUsuario(req: Request, res: Response) {
  let newUsuario: Usuario = req.body;
  try {
    newUsuario.password = await encrypt(newUsuario.password);
    const conn = await connect();
    const results = await conn.query("INSERT INTO usuario SET ? ", [
      newUsuario,
    ]);
    console.log(results);
    conn.end();
    return res.json({
      message: results,
    });
  } catch (e) {
    return res.json(e);
  }
}

export async function obtenerUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const posts = await conn.query(
      "SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM usuario WHERE username = ?",
      [id]
    );
    conn.end();
    return res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}

export async function eliminarUsuario(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const posts = await conn.query("DELETE FROM usuario WHERE idUsuario = ?", [
      id,
    ]);
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function actualizarUsuario(req: Request, res: Response) {
  const id = req.params.id;
  const updateUsuario: Usuario = req.body;
  try {
    updateUsuario.password = await encrypt(updateUsuario.password);
    const conn = await connect();
    const results = await conn.query(
      "UPDATE usuario SET ? WHERE idUsuario = ?",
      [updateUsuario, id]
    );
    conn.end();
    res.json({
      message: results,
    });
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function obtenerFavoritos(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const posts = await conn.query(
      "SELECT u.idUsuario,a.idAnime,a.nombre,a.sinopsis,a.imagen FROM usuario as u INNER JOIN favorito as f ON u.idUsuario=f.idUsuario AND f.idUsuario = ? INNER JOIN anime as a ON f.idAnime=a.idAnime",
      [id]
    );
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function anadirFavoritos(req: Request, res: Response) {
  const favoritos = req.body;
  try {
    const conn = await connect();
    const posts = await conn.query("INSERT INTO favorito SET ?", [favoritos]);
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function eliminarFavoritos(req: Request, res: Response) {
  const idUsuario = req.params.idUsuario;
  const idAnime = req.params.idAnime;
  try {
    const conn = await connect();
    const posts = await conn.query(
      "DELETE FROM favorito WHERE idUsuario=? AND idAnime=?",
      [idUsuario, idAnime]
    );
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}
export async function obtenerUsuariosSeguidos(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const posts = await conn.query(
      "SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguidor = ? AND f.idSeguido=u.idUsuario",
      [id]
    );
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}

export async function obtenerSeguidores(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const conn = await connect();
    const posts = await conn.query(
      "SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguido = ? AND f.idSeguidor=u.idUsuario",
      [id]
    );
    conn.end();
    res.json(posts[0]);
  } catch (e) {
    console.log(e);
    return res.json(e);
  }
}

async function encrypt(pass: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
}

async function validate(pass: string, sql: string): Promise<boolean> {
  console.log(pass);
  console.log(sql);
  return await bcrypt.compare(pass, sql);
}
