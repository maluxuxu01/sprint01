import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Servidor rodando  !")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(` em http://localhost:${PORT}`);
})

app.get("/status", (req, res) => {
  res.json({ status: "online", sprint: 1 });
});

app.get("/sobre", (req, res) => {
  res.send("Mensageiro Local - Criado no SENAI");
});
