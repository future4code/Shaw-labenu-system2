import {Request, Response} from "express"
import { EstudanteDataBase } from "../data/EstudanteDataBase"

export const trocaEstudante = async (req: Request,res: Response): Promise<void> => {
  try {
    const estudanteDB = new EstudanteDataBase();

    await estudanteDB.mudarTurmaEstudante(
      Number(req.query.id_estudante),
      Number(req.query.id_turma)
    );

    res.status(201).send(`Estudante agora esta na turma ${req.query.id_turma} !`);
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};