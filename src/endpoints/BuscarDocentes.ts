import {Request, Response} from "express"
import { DocenteDataBase } from "../data/DocenteDataBase"

export const buscarDocente = async (req: Request, res: Response): Promise<void> =>{
    try{
        const docentesDB = new DocenteDataBase()
        await docentesDB.pegarDocentesAtivos().then(result =>{

            const resultado = result.map(inf =>{
                const data = inf.data_nasc
                const dataString = data.toISOString()
                const conversorData = (data:string) => {  
                    const ano = data.substring(0, 4)
                    const mes = data.substring(5, 7)
                    const dia = data.substring(8, 10) 
                    return `${dia}/${mes}/${ano}`
                }
                const dataConvertida = conversorData(dataString)
                return {nome: inf.nome, 
                    email: inf.email, 
                    data_nasc: dataConvertida,
                    turma_id: inf.turma_id,
                    especialidade: inf.especialidade
                }
            })
            res.status(201).send(resultado)
        })
    }catch(error:any){
        throw new Error(error.sqlMessage || error.message)
    }
}