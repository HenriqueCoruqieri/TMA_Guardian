import express from "express";
import pool from "./db.js";
import cors from "cors";

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
