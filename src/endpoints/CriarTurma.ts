import {Request, Response} from "express"
import { TurmaDataBase } from "../data/TurmaDataBase"
import { Turma } from "../model/Turma"

export const createTurma = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {nome, modulo} = req.body        

        const turma = new Turma(nome, modulo)

        const turmaDB = new TurmaDataBase()

        await turmaDB.criarTurma(turma)

        res.status(201).send("Turma criada com sucesso!!!")

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message)
    }
}

