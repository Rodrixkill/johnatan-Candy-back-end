import { Request, Response } from 'express'
import { encodeSession } from "../jwt-simple/webToken";
import { connect } from '../database'
import bcrypt from "bcryptjs";
import { Usuario } from '../interface/Usuario'
const SECRET_KEY_HERE="jhonatanCandy";

export async function indexWelcome(req: Request, res: Response): Promise<any> {
   var username = req.body.username;
   var password = req.body.password;
   console.log(username);
   console.log(password);
   const prueba = await encrypt("password");
	if (username && password) {
      try {
         const conn = await connect();
         const results: any = await conn.query('SELECT * FROM usuario WHERE username = ?', username);
         console.log(results[0][0]);
         if(results[0].length > 0){
            
            const validatePass= await validate(password,results[0][0].password);
            console.log(validatePass);
            if(validatePass){
               const session = encodeSession(SECRET_KEY_HERE, {
                  username: username      
               });
               return res.status(201).json([session]);
            }
            else{
               return res.json('Contraseña incorrecta');
            }     
         } else {
            return res.json('No existe el usuario');
         }
      }
      catch (e) {
            console.log(e)
      }
	} else {
		return res.json('Complete username and password');
	}
   
}

export async function crearUsuario(req: Request, res: Response) {
   let newUsuario: Usuario = req.body;
   try {
       newUsuario.password = await encrypt(newUsuario.password);
       const conn = await connect();
       const results = await conn.query('INSERT INTO usuario SET ? ', [newUsuario]);
       console.log(results);
       return res.json({
           message: results
       });
   }
   catch (e) {
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