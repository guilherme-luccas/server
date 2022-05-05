import express from "express";
import { routes } from "./routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Servidor funcionando"));

//PRINCIPIOS SOLID

// 1. S = cada classe/funcao tem uma responsabilidade unica
// 2. O = as classes aplicacao devem ser abertar para extensao mas fechada para modificacao
// 3. L = nós devemos poder substituir uma classe pai por uma herença dela e tudo continuar funcionando
// 4. I = ...
// 5. D =
