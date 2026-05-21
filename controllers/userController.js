import {
  buscarUsuarioPorEmail,
  criarUsuario,
  atualizarSenha
} from "../models/userModel.js";

// CADASTRO
export async function cadastrarUser(req, res) {
  try {

    console.log("BODY:", req.body);

    const { nome, email, senha } = req.body;

    console.log("Buscando usuário...");

    const usuarioExistente =
      await buscarUsuarioPorEmail(email);

    console.log(usuarioExistente);

    await criarUsuario(nome,email,senha);

    res.status(201).json({
      mensagem:"Usuário cadastrado"
    });

  } catch(erro){

    console.error("ERRO:", erro);

    res.status(500).json({
      mensagem: erro.message
    });

  }
}

// LOGIN
export async function loginUser(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await buscarUsuarioPorEmail(email);

    if (!usuario) {
      return res.status(404).json({
        mensagem: "Usuário não encontrado"
      });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({
        mensagem: "Senha incorreta"
      });
    }

    res.status(200).json({
      mensagem: "Login realizado com sucesso",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao fazer login"
    });
  }
}

// REDEFINIR SENHA
export async function redefinirSenha(req, res) {
  try {
    const { email, novaSenha } = req.body;

    const usuario = await buscarUsuarioPorEmail(email);

    if (!usuario) {
      return res.status(404).json({
        mensagem: "Usuário não encontrado"
      });
    }

    await atualizarSenha(email, novaSenha);

    res.status(200).json({
      mensagem: "Senha atualizada com sucesso"
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao redefinir senha"
    });
  }
}