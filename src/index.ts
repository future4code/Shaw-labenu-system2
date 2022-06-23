import { app } from "./app";
import { buscarDocente } from "./endpoints/BuscarDocentes";
import { createDocente } from "./endpoints/CriarDocente";
import { createTurma } from "./endpoints/CriarTurma";
import { trocaDocente } from "./endpoints/TrocarDocente";



app.post('/criarturma', createTurma)

app.post('/criardocente', createDocente)

app.get('/buscardocente', buscarDocente)

app.put('/trocadocente', trocaDocente)






















