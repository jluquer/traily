import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import routes from "./routes";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
const port = process.env.PORT || 3000;
const allowedOrigins = ["http://localhost:4200", "https://jluquer.github.io"];
const corsConfig = cors({
  credentials: true,
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin: ${origin} is now allowed`));
    }
  },
});

createConnection()
  .then(async () => {
    const app = express();

    app.options("*", corsConfig);
    app.use(corsConfig);
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
