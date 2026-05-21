import express from "express";

import {

    cadastrarUser, 
    loginUser, 
    redefinirSenha
    } from "../controllers/userController.js";

    const router = express.Router();

    // CADASTRO
    router.post("/cadastro", cadastrarUser);

    // LOGIN
    router.post("/login", loginUser);

    // REDEFINIR SENHA
    router.put("/redefinir-senha", redefinirSenha);

    export default router;