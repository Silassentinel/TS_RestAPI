import cors from 'cors';

// Start method
export const start = () => {
  require('dotenv').config(); // server config uit een .env bestand halen
  const Cors = cors; // toelaten van cors // dit werkte tot op een zeker punt en werd dan teniet gedaan// nog niet gevonden wat er toe leidde
  const port = process.env.PORT || 3000; // zetten van de port
  const express = require('express'); // express server
  const app = express(); // bruikbaar maken
  const helmet = require('helmet'); // bescherming tegen header attacks
  const FallBackRoute = require('../routes/fallback'); // men kan al eens een foutje typen

  /*
   *IMPORT ROUTES HERE
   */
  app.use('*', FallBackRoute); // fallback routes

  // verdere setup van de CORS plugin
  const corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
  };

  app.use(helmet()); // gebruiken van  helmet
  app.use(express.json()); // json parsing toestaan / check
  app.use(express.urlencoded({ extended: true })); // enkel correct versleutelde bodies worden verwerkt
  app.use(Cors(corsOptions)); // corsplugin met settings
  // starten van de server
  app.listen(port, () => {
    console.log(`listening on port : ${process.env.PORT || port}`);
  });
};
