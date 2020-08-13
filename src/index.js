import models from './models'
import routes from './routes'

import express from 'express'
const app = express()
const port = 3000

app.use((req, res, next) => {
  req.context = {
    models
  };
  next();
});

app.use('/tournament', routes.tournament);
app.use('/player', routes.player);
//app.use('/messages', routes.message);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
