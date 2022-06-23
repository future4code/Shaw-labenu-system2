import { app } from "./app";
import { createEstudante } from "./endpoints/CriarEstudante";
import { createTurma } from "./endpoints/CriarTurma";



app.post('/criarturma', createTurma)
app.post('/criarestudante', createEstudante)























