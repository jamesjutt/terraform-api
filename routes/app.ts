import express = require("express");
import routes from "./router";

const app: express.Application = express();

const port: number = +(process.env.PORT || 3000);

app.use(routes);

const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

if (!isInLambda) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

export = app;
