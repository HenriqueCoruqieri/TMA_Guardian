import express from "express";
import pool from "./db.js";
import cors from "cors";
import { User } from "lucide-react";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota para buscar a imagem pelo campo url
app.get("/api/images", async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "URL não fornecida" });
  }
  try {
    const result = await pool.query(
      "SELECT * FROM images WHERE image_url = $1",
      [url]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Imagem não encontrada" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar imagem" });
  }
});

// Rota para cadastar usuário
app.post("/api/register", async (req, res) => {
  const { agent_name, email, password } = req.body;
  if (!agent_name || !email || !password) {
    return res.status(400).json({ error: "Dados de cadastro incompletos" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO agents(agent_name, email, password) VALUES($1, $2, $3) RETURNING *",
      [agent_name, email, password]
    );
    res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    if (err.code == "23505") {
      return res.status(400).json({ error: "Este email já foi cadastrado" });
    }
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
});
