import { connect, set } from "mongoose";
import express, { Application } from "express";

import config from "./config";
import Routes from "./interfaces/routes.interface";
import errorMiddleware from "./middlewares/error.middleware";

class App {
  public app: Application;

  constructor(routes: Routes[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public async listen() {
    await this.connectToMongodb();

    this.app.listen(config.PORT, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${config.NODE_ENV} =======`);
      console.log(`🚀 App listening on the port ${config.PORT}`);
      console.log(`=================================`);
    });
  }

  public async connectToMongodb() {
    try {
      if (config.NODE_ENV !== "production") {
        set("debug", true);
      }

      await connect(config.MONGODB_URI);
    } catch (error) {
      process.exit(0);
    }
  }
  
  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
