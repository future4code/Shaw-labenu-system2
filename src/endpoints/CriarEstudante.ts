import { Request, Response } from "express";
import { Estudante } from "../model/Estudante";

console.log("fora")

export const createEstudante = async(req: Request, res: Response): Promise<void> => {
  try {
    const {nome, email, nascimento, hobby} = req.body
    const turma_id = 10;

    const estudante = new Estudante(nome, email, nascimento, turma_id, [{nome: hobby}])
       

     res.status(201).send()

  } catch (error:any) {
    res.status(500).send(error.message)
  }
}