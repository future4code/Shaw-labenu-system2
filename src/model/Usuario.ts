export class Usuario {
    constructor(
        public id: number | undefined = undefined,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id: number
    ){
        
        console.log("Construindo um Usuário");
        
    }
}