import { pool } from "../config/database.js";

// Buscar usuário pelo email
export async function buscarUsuarioPorEmail(email) {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email]
  );

  return rows[0];
}

// Criar usuário
export async function criarUsuario(nome, email, senha) {
  const [result] = await pool.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha]
  );

  return result;
}

// Atualizar senha
export async function atualizarSenha(email, novaSenha) {
  const [result] = await pool.query(
    "UPDATE usuarios SET senha = ? WHERE email = ?",
    [novaSenha, email]
  );

  return result;
}