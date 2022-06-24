import { Usuario } from "./Usuario";

type Hobby = {
    id: number,
    nome: string
}

export class Estudante extends Usuario {
    constructor(
        id: number,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: number,
        private hobby: Hobby[],
    )
    {
        super(id, nome, email, data_nasc, turma_id)
    }

    public getHobby(): Hobby[] {
        return this.hobby
    }
}


