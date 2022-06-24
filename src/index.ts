import { app } from "./app";
import { getTurmas } from "./endpoints/BuscarTurmas";
import { createTurma } from "./endpoints/CriarTurma";
import { mudarModulo } from "./endpoints/MudarModulo";
import { buscarDocente } from "./endpoints/BuscarDocentes";
import { createDocente } from "./endpoints/CriarDocente";
import { trocaDocente } from "./endpoints/TrocarDocente";




app.get('/buscarTurmasAtivas', getTurmas)
app.post('/criarturma', createTurma)
app.put('/mudarModulo/:id', mudarModulo)

app.post('/criardocente', createDocente)

app.get('/buscardocente', buscarDocente)

app.put('/trocadocente', trocaDocente)






















