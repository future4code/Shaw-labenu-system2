import { app } from "./app";
import { createEstudante } from "./endpoints/CriarEstudante";
import { pegarEstudante } from "./endpoints/PegarEstudante";
import { buscarDocente } from "./endpoints/BuscarDocentes";
import { createDocente } from "./endpoints/CriarDocente";
import { createTurma } from "./endpoints/CriarTurma";
import { trocaDocente } from "./endpoints/TrocarDocente";
import { trocaEstudante } from "./endpoints/TrocarEstudante";

app.post("/criarturma", createTurma);
app.post("/criarestudante", createEstudante);
app.post("/criardocente", createDocente);

app.get("/pegarestudante", pegarEstudante);
app.get("/buscardocente", buscarDocente);

app.put("/trocadocente", trocaDocente);
app.put("/trocaestudante", trocaEstudante);
