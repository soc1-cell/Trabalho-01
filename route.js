const express = require("express");
const router = express.Router();

let tarefas = [];
let idAtual = 1;

// GET - listar tarefas
router.get("/", (req, res) => {
    res.json(tarefas);
});

// POST - criar tarefa
router.post("/", (req, res) => {
    const { texto } = req.body;

    const nova = {
        id: idAtual++,
        texto
    };

    tarefas.push(nova);

    res.status(201).json(nova);
});

// DELETE - remover tarefa
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    tarefas = tarefas.filter(t => t.id !== id);

    res.json({ mensagem: "Tarefa removida" });
});

module.exports = router;