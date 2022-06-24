import { Docente } from "../model/Docente";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDataBase extends BaseDatabase {
    public async criarDocente(docente: Docente) {
        console.log(docente.getEspecialidade())
        const get_id_especialidade = (): number => {
            return Number(Math.floor(Date.now() * Math.random()))
        }
        const id_especialidade = get_id_especialidade()
        const id_docenteEspecialidade = (): number => {
            return Number(Math.floor(Date.now() * Math.random()))
        }
        console.log(id_especialidade)
        console.log(id_especialidade)
        try {
            await BaseDatabase.connection("Docente")
                .insert({ 
                    id: docente.getId(),                   
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getData_Nasc(),
                    turma_id: docente.getTurma_id(), 
                })
            await BaseDatabase.connection("Especialidade") 
            .insert({
                id: id_especialidade,
                nome: docente.getEspecialidade()
            })   
            await BaseDatabase.connection("Docente_Especialidade") 
            .insert({
                id: id_docenteEspecialidade(),
                docente_id: docente.getId(),
                especialidade_id: id_especialidade
            })   
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async pegarDocentesAtivos() {
        try {
            const result = await BaseDatabase.connection("Docente")
                .join("Docente_Especialidade","Docente.id","Docente_Especialidade.docente_id")
                .join("Especialidade","Docente_Especialidade.especialidade_id","Especialidade.id")
                .select("Docente.nome as nome", "Docente.email", "Docente.data_nasc", "Docente.turma_id", "Especialidade.nome as especialidade")
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