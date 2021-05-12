import {DBResponse} from "./query";
import { Response } from 'express'

export function simpleResponse(dbResponse: DBResponse, res: Response) {
  if (dbResponse.error) {
    return res.status(500).json('Error del servidor');
  }else {
    return res.status(200).json(dbResponse.data);
  }
}