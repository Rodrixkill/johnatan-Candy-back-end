import { Request, Response } from "express";

// DB
import {executeSimpleQuery} from "../database";
import {simpleResponse} from "../utils";
// Interfaces
import { Usuario } from "../interface/Usuario";
import bcrypt from "bcryptjs";

export async function obtenerUsuarios(req: Request, res: Response): Promise<Response | void> {
  let searchVal: string= '%'+req.params.search+'%';
  let queryResult = await executeSimpleQuery('select nombre,username from usuario WHERE username LIKE ? ;', [searchVal]);
  return simpleResponse(queryResult, res);
}

export async function crearUsuario(req: Request, res: Response) {
  let newUsuario: Usuario = req.body;
  let exists = await executeSimpleQuery('SELECT username FROM usuario WHERE username = ? ', [newUsuario.username]);
  if(exists.length<1){
    newUsuario.password = await encrypt(newUsuario.password);
    let queryResult = await executeSimpleQuery('INSERT INTO usuario SET ? ', [newUsuario]);
    return simpleResponse(queryResult, res);
  }else{
    res.status(400);
    return res.json('Usuario ya existe');
  }
}

export async function obtenerUsuario(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('SELECT idUsuario,nombre,username,correo,fechaNacimiento FROM usuario WHERE username = ?', [req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function eliminarUsuario(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('DELETE FROM usuario WHERE idUsuario = ?', [req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function actualizarUsuario(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('UPDATE usuario SET ? WHERE idUsuario = ?', [req.body, req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function obtenerFavoritos(req: Request, res: Response) {
  let query = 'SELECT u.idUsuario,a.idAnime,a.nombre,a.sinopsis,a.imagen FROM usuario as u INNER JOIN favorito as f ON u.idUsuario=f.idUsuario AND f.idUsuario = ? INNER JOIN anime as a ON f.idAnime=a.idAnime';
  let queryResult = await executeSimpleQuery(query, [req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function anadirFavoritos(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('INSERT INTO favorito SET ?', [req.body]);
  return simpleResponse(queryResult, res);
}

export async function eliminarFavoritos(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('DELETE FROM favorito WHERE idUsuario=? AND idAnime=?', [req.params.idUsuario, req.params.idAnime]);
  return simpleResponse(queryResult, res);
}

export async function obtenerUsuariosSeguidos(req: Request, res: Response) {
  let query = 'SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguidor = ? AND f.idSeguido=u.idUsuario';
  let queryResult = await executeSimpleQuery(query, [req.params.id]);
  return simpleResponse(queryResult, res);
}

export async function obtenerSeguidores(req: Request, res: Response) {
  let query = 'SELECT u.idUsuario,u.nombre,u.username FROM usuario as u,follow as f WHERE f.idSeguido = ? AND f.idSeguidor=u.idUsuario';
  let queryResult = await executeSimpleQuery(query, [req.params.id]);
  return simpleResponse(queryResult, res);
}

async function encrypt(pass: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
}

export async function eliminarFollow(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('DELETE FROM follow WHERE idSeguidor=? AND idSeguido=?', [req.params.id, req.params.idS]);
  return simpleResponse(queryResult,res);
}

export async function addFollow(req: Request, res: Response) {
  let queryResult = await executeSimpleQuery('INSERT INTO follow SET ?', [req.body]);
  return simpleResponse(queryResult,res);
}
