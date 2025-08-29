/* eslint-disable no-undef */

import pkg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

// Testando a conexão
pool
  .connect()
  .then(() => console.log("Conectado ao PostgreSQL com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao PostgreSQL:", err));

export default pool;
