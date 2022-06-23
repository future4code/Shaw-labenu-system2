import { Estudante } from "../model/Estudante";
import { BaseDatabase } from "./BaseDatabase";


export class EstudanteDataBase extends BaseDatabase{
  public async criarEstudante(estudante: Estudante) {
    
    try {
      await BaseDatabase.connection("Estudante")
      .insert({
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getData_Nasc(),
        turma_id: estudante.getTurma_id(),
      })

      await BaseDatabase.connection("Hobby")
      .insert({
        nome: estudante.getHobby(),
      })
    
    } catch (error:any) {
      console.log(error.sqlMessage)
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async pegarEstudante() {
    
    try {
      const result = await BaseDatabase.connection("Estudante")
      .select("*")

      await BaseDatabase.connection("Hobby")
      .select("*")
      return result
    
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}