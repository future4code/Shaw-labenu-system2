export class Turma {
    constructor(
        private nome: string,
        private modulo: string,
        private id?: number,
    ) { }

    public getId() {
        return this.id
    }
    public getNome() {
        return this.nome
    }
    public getModulo() {
        return this.modulo
    }
}