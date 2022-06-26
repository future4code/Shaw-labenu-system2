import { app } from "./app";
import { createEstudante } from "./endpoints/CriarEstudante";
import { buscarEstudante } from "./endpoints/BuscarEstudante";
import { getTurmas } from "./endpoints/BuscarTurmas";
import { createTurma } from "./endpoints/CriarTurma";
import { mudarModulo } from "./endpoints/MudarModulo";
import { buscarDocente } from "./endpoints/BuscarDocentes";
import { createDocente } from "./endpoints/CriarDocente";
import { trocaDocente } from "./endpoints/TrocarDocente";
import { trocaEstudante } from "./endpoints/TrocarEstudante";

app.get("/buscarestudante", buscarEstudante);
app.get("/buscardocente", buscarDocente);
app.get("/buscarTurmasAtivas", getTurmas);

app.post("/criarturma", createTurma);
app.post("/criarestudante", createEstudante);
app.post("/criardocente", createDocente);

app.put("/trocadocente", trocaDocente);
app.put("/trocaestudante", trocaEstudante);
app.put("/mudarModulo/:id", mudarModulo);





























