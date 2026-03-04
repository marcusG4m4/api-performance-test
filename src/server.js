const express = require('express');

const app = express();

app.get('/users', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 100));

  res.json([
    { id: 1, name: "João" },
    { id: 2, name: "Maria" }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});