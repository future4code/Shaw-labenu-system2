import {Request, Response} from "express"
import { DocenteDataBase } from "../data/DocenteDataBase"
import { Docente } from "../model/Docente"

export const createDocente = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {nome, email, data_nasc, turma_id, especialidade} = req.body        

        const docente:Docente = new Docente(nome, email, data_nasc, turma_id, especialidade)

        const docenteDB = new DocenteDataBase()

        await docenteDB.criarDocente(docente)

        res.status(201).send("Docente cadastrado(a) com sucesso!!!")

    }catch(error:any){
        throw new Error(error.sqlMessage || error.message)
    }
}