import { Estudante } from "../model/Estudante";
import { BaseDatabase } from "./BaseDatabase";


export class EstudanteDataBase extends BaseDatabase {
  public async criarEstudante(estudante: Estudante) {

    const get_id_hobby = ():number => {
      return Number(Math.floor(Date.now() * Math.random()))
    }

    const id_hobby = get_id_hobby();

    try {
      await BaseDatabase.connection("Estudante")
      .insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getData_Nasc(),
        turma_id: estudante.getTurma_id(),
      });

      await BaseDatabase.connection("Hobby")
      .insert({
        id: id_hobby,
        nome: estudante.getHobby(),
      });

      await BaseDatabase.connection("Estudante_Hobby")
      .insert({
        id: Number(Math.floor(Date.now() * Math.random())),
        estudante_id: estudante.getId(),
        hobby_id: id_hobby,
      });

    } catch (error: any) {
      console.log(error.sqlMessage);
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async buscarEstudante(nome: string) {
    try {
      const result = await BaseDatabase.connection("Estudante")
        .join(
          "Estudante_Hobby",
          "Estudante.id",
          "Estudante_Hobby.estudante_id"
        )
        .join(
          "Hobby",
          "Estudante_Hobby.hobby_id",
          "Hobby.id"
        )
        .select(
          "Estudante.nome as nome",
          "Estudante.email",
          "Estudante.data_nasc",
          "Estudante.turma_id",
          "Hobby.nome as hobby"
        )
        .where("Estudante.nome", "LIKE", nome)
        ;
      return result;

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async mudarTurmaEstudante(id: number, turma_id: number) {
    try {
      await BaseDatabase.connection("Estudante")
        .update({
          turma_id: turma_id,
        })
        .where("id", id);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}