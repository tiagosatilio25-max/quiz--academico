import express from "express";
import path from "path";

import userRoutes from "./routes/userRoutes.js";
import pageRoutes from "./routes/pageRoutes.js"


import quizRoutes from "./routes/quizRoutes.js";
import pontuacaoRoutes from "./routes/pontuacaoRoutes.js";
import rankingRoutes from "./routes/rankingRoutes.js";

import { pool } from "./config/database.js";


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
  // app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(process.cwd(), "views")));
app.use("/css", express.static(path.join(process.cwd(), "css")));
app.use("/imgs", express.static(path.join(process.cwd(), "public/imgs")));
app.use("/js", express.static(path.join(process.cwd(), "public/js")));

// Rotas

app.use("/api/users", userRoutes);
app.use("/", pageRoutes);
app.use("/", quizRoutes);
app.use("/", pontuacaoRoutes);
app.use("/", rankingRoutes);
// porta

const PORT = process.env.PORT || 3000;

// Conexão banco
pool.getConnection()
  .then(() => {
    console.log("Conectado ao MySQL!");

    app.use((req, res, next) => {

  console.log(
    req.method,
    req.url
  );

  next();
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro) => {
    console.error("Erro ao conectar no banco:", erro);
  });
