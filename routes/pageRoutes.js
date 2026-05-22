import express from "express";
import path from "path";

const router = express.Router();

// Página inicial
router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "login.html"));
});

// Login
router.get("/login", (req, res) => {
  res.sendFile(path.join(process.cwd(), "login.html"));
});

// Cadastro
router.get("/cadastro", (req, res) => {
  res.sendFile(path.join(process.cwd(), "cadastro.html"));
});

// Redefinir senha
router.get("/redefinir", (req, res) => {
  res.sendFile(path.join(process.cwd(), "redefinir.html"));
});

// Trocar senha
router.get("/trocarSenha", (req, res) => {
  res.sendFile(path.join(process.cwd(), "trocarSenha.html"));
});

export default router;