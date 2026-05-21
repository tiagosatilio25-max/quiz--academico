import mysql from "mysql2/promise";

// Criação da conexão com o banco
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aluno",
  database: "quiz",
  port: 3302,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste da conexão
pool.getConnection()
  .then((connection) => {
    console.log("Conectado ao banco de dados MySQL!");
    connection.release();
  })
  .catch((erro) => {
    console.error("Erro ao conectar ao banco:", erro);
  });

