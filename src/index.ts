import { app } from "./app";
import { getTurmas } from "./endpoints/BuscarTurmas";
import { createTurma } from "./endpoints/CriarTurma";
import { mudarModulo } from "./endpoints/MudarModulo";



app.get('/buscarTurmasAtivas', getTurmas)
app.post('/criarturma', createTurma)
app.put('/mudarModulo/:id', mudarModulo)






















