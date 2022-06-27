import {Request, Response} from "express"
import { TurmaDataBase } from "../data/TurmaDataBase"

export const mudarModulo = async (req: Request, res:Response):Promise <void> =>{
    try{

        const {modulo} = req.body

        if(!modulo || modulo > 6 || modulo != Number){
            throw new Error("Modulo ausente ou invalido, favor verificar")
        }
        
        const turmaDB = new TurmaDataBase()
        
        await turmaDB.mudarTurmaModulo(modulo, Number(req.params.id))       

        res.status(201).send("Alterado com Sucesso!")

    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message)
    }
}