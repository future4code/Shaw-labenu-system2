import {Request, Response} from "express"
import { EstudanteDataBase } from "../data/EstudanteDataBase"

export const trocaEstudante = async (req: Request,res: Response): Promise<void> => {
  try {
    const estudanteDB = new EstudanteDataBase();
    
    if(!req.query.id_turma || !req.query.id_estudante){
      throw new Error("Turma ausente ou invalida, favor verificar")
    }

    await estudanteDB.mudarTurmaEstudante(
      Number(req.query.id_estudante),
      Number(req.query.id_turma)
    );


    res.status(201).send(`Estudante agora esta na turma ${req.query.id_turma} !`);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};