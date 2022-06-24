import { Docente } from "../model/Docente";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDataBase extends BaseDatabase {
    public async criarDocente(docente: Docente) {
        console.log(docente.getEspecialidade())
        try {
            await BaseDatabase.connection("Docente")
                .insert({                    
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getData_Nasc(),
                    turma_id: docente.getTurma_id(), 
                })
            await BaseDatabase.connection("Especialidade") 
            .insert({
                nome: docente.getEspecialidade()
            })   
            // await BaseDatabase.connection("Docente_Especialidade") 
            // .insert({
            //     docente_id: docente.getEspecialidade()
            //     especialidade_id: docente.getEspecialidade()
            // })   
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async pegarDocentesAtivos() {
        try {
            const result = await BaseDatabase.connection("Docente")
                .select("*")
            return result

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async mudarDocenteTurma(id: number, turma_id: number) {
        try {
            await BaseDatabase.connection("Docente")
                .update({
                    turma_id: turma_id
                })
                .where("id", id)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}