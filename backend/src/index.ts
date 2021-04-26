import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import routes from "./routes";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
const port = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use("/", routes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
