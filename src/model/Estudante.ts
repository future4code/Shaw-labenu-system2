import { Usuario } from "./Usuario";

type Hobby = {
    id: number,
    nome: string
}

export class Estudante extends Usuario {
    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: number,
        private hobby: Hobby[],
        id: number
    )
    {
        super(nome, email, data_nasc, turma_id, id)
    }

    public getHobby(): Hobby[] {
        return this.hobby
    }
}


