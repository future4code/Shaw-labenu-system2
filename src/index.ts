import { app } from "./app";
import { createEstudante } from "./endpoints/CriarEstudante";
import { createTurma } from "./endpoints/CriarTurma";
import { pegarEstudante } from "./endpoints/PegarEstudante";



app.post('/criarturma', createTurma)
app.post('/criarestudante', createEstudante)
app.get('/pegarestudante', pegarEstudante)
























