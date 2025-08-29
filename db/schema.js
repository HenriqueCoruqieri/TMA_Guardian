import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client(); // << não precisa passar nada aqui, ele lê do .env
await client.connect();

console.log("Conectado ao banco:", client.database);

async function createSchema() {
  try {
    await client.query(`
        CREATE TABLE IF NOT EXISTS team (
            team_id             SERIAL          PRIMARY KEY,
            team_name           VARCHAR(20)     NOT NULL,
            team_goal           NUMERIC         NOT NULL,
            team_result         NUMERIC         NOT NULL,
            goal_achieved       BOOLEAN         NOT NULL
        );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS agents (
            agent_id            SERIAL          PRIMARY KEY,
            team_id             INT,
            agent_name          VARCHAR(50)     NOT NULL,
            email               VARCHAR(50)     NOT NULL,
            password            VARCHAR(18)     NOT NULL,
            created_at          TIMESTAMP       NOT NULL,

            FOREIGN KEY (team_id) REFERENCES team(team_id)
        );
    `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS goals (
	        goal_id				SERIAL			PRIMARY KEY,
	        tma_goal			NUMERIC			NOT NULL,
	        tolerance			NUMERIC			NOT NULL,
        );
      `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS calls (
	        call_id				SERIAL			PRIMARY KEY,
	        agent_id			INT,
	        start_call			TIMESTAMP		NOT NULL,
	        end_call			TIMESTAMP		NOT NULL,
	        duration			INTERVAL		NOT NULL,

	        FOREIGN KEY (agent_id) REFERENCES agents(agent_id)
        );
      `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS agent_performance (
	        performance_id		SERIAL			PRIMARY KEY,
	        agent_id			INT,
	        goal_id				INT,
	        period				DATE			NOT NULL,
	        calls_quantity		INT				NOT NULL,
	        tma_result			NUMERIC			NOT NULL,
	        goal_achieved		BOOLEAN			NOT NULL,

	        FOREIGN KEY (agent_id) REFERENCES agents(agent_id),
	        FOREIGN KEY (goal_id) REFERENCES goals(goal_id)
        );
      `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS images (
            image_id            SERIAL          PRIMARY KEY,
            image_name          VARCHAR(40)     NOT NULL,
            image_url           TEXT         NOT NULL,
        );
      `);

    console.log("Schema criado com sucesso!");
  } catch (err) {
    console.error("Erro ao criar schema:", err);
  } finally {
    await client.end();
  }
}

createSchema();
