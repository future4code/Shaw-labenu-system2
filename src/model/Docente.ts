import { Especialidade } from "./Especialidade";
import { Usuario } from "./Usuario";

export class Docente extends Usuario {
    constructor(
        public id: number | undefined = undefined,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: number,
        public especialidade: Especialidade[],
    ){
        super(id, nome, email, data_nasc, turma_id)
    }
}