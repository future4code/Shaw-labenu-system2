import {Request, Response} from "express"
import { DocenteDataBase } from "../data/DocenteDataBase"

export const buscarDocente = async (req: Request, res: Response): Promise<void> =>{
    try{
        const docentesDB = new DocenteDataBase()
        await docentesDB.pegarDocentesAtivos().then(result =>{
            res.status(201).send(result)
        })
    }catch(error:any){
        throw new Error(error.sqlMessage || error.message)
    }
}