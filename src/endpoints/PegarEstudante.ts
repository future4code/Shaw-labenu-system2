import { Request, Response } from "express"
import { EstudanteDataBase } from "../data/EstudanteDataBase"

export const pegarEstudante = async (req: Request, res: Response
): Promise<void> => {
  try {
    const resultDB = new EstudanteDataBase();

    const result = await resultDB.pegarEstudante();

    res.status(201).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};