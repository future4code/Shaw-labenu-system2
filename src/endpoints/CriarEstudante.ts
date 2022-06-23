import { Request, Response } from "express";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import { Estudante } from "../model/Estudante";

export const createEstudante = async(req: Request, res: Response): Promise<void> => {
  try {
    const {nome, email, nascimento, turma_id, hobby} = req.body

    const estudante = new Estudante(nome, email, nascimento, turma_id, hobby)
      
    const turmaDB = new EstudanteDataBase()

    await turmaDB.criarEstudante(estudante)

     res.status(201).send("Criado estudante com sucesso")
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}