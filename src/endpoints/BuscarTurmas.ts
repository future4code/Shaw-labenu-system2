import { Request, Response } from "express"
import { TurmaDataBase } from "../data/TurmaDataBase"


export const getTurmas = async (req: Request, res: Response): Promise<void> => {
    try {

        const turmaDB = new TurmaDataBase()

        const turma = await turmaDB.pegarTurmasAtivas()

        res.send(turma)

    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}