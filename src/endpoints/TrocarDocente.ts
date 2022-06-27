import {Request, Response} from "express"
import { DocenteDataBase } from "../data/DocenteDataBase"

export const trocaDocente = async (req: Request, res: Response): Promise<void> =>{
    try{
        const id_docente = Number(req.query.id_docente)
        const id_turma = Number(req.query.id_turma)  

        if(!id_turma || !id_docente){
            throw new Error("Turma ausente ou invalida, favor verificar")
          }

        const docenteDB = new DocenteDataBase()

        await docenteDB.mudarDocenteTurma(id_docente,id_turma)

        res.status(201).send(`Docente agora esta na turma ${id_turma} !`)

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message)
    }
}