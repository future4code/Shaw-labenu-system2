import { Hobby } from "./Hobby";
import { Usuario } from "./Usuario";



export class Estudante extends Usuario implements Hobby{
    constructor( public id: number | undefined = undefined, nome:string, email: string, data_nasc: string, turma_id: number, public hobby:Hobby[])
    {
        super(id, nome, email, data_nasc, turma_id)
        
    }
}