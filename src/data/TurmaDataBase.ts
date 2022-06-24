import { Turma } from "../model/Turma";
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDataBase extends BaseDatabase {
    public async criarTurma(turma: Turma) {
        try {
            await BaseDatabase.connection("Turma")
                .insert({
                    nome: turma.getNome(),
                    modulo: turma.getModulo()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async pegarTurmasAtivas() {
        try {
            const result = await BaseDatabase.connection("Turma")
                .select("*")
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async mudarTurmaModulo(modulo: string, id: number) {
        try {
            await BaseDatabase.connection("Turma")
                .update({
                    modulo: modulo
                })
                .where('id', id)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}