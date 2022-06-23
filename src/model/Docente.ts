import { Usuario } from "./Usuario";

type Especialidade = {
    nome:"JS" | "CSS" | "React" | "Typescript" | "POO"
}
export class Docente extends Usuario {
    constructor(
         nome: string,
         email: string,
         data_nasc: string,
         turma_id: number,
        private especialidade: Especialidade[],
         id?: number
    ){
        super(nome, email, data_nasc, turma_id, id)
    }

    public getEspecialidade(): Especialidade[]{
        return this.especialidade
    }
}

