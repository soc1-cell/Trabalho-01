const express = require("express");
const app = express();

app.use(express.json());

// importar rotas
const tarefasRoutes = require("./routes/tarefas");
app.use("/tarefas", tarefasRoutes);

// iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});