const express = require("express");
const { Pool } = require("pg");
const databaseConfig = require("./config");
const cors = require("cors");
const apiRoutes = require("./apiroutes");


const app = express();
const pool = new Pool(databaseConfig);

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});