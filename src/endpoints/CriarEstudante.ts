import { Request, Response } from "express";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import { Estudante } from "../model/Estudante";

export const createEstudante = async (req: Request,res: Response): Promise<void> => {
  try {
    const { nome, email, nascimento, turma_id, hobby } = req.body;
    const id = Number(Math.floor(Date.now() * Math.random()));

    if(!nome || !email|| !nascimento || !turma_id){
      throw new Error("Dados faltantes")
    }

    const conversorData = (date: string): string => {
      const arrData = date.split("/");
      return `${arrData[2]}-${arrData[1]}-${arrData[0]}`;
    };

    const dateSQL = conversorData(nascimento);

    const estudante = new Estudante(nome, email, dateSQL, turma_id, hobby, id);

    const turmaDB = new EstudanteDataBase();

    await turmaDB.criarEstudante(estudante);

    res.status(201).send("Criado estudante com sucesso");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};