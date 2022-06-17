import { Router } from "express";

import Routes from "../interfaces/routes.interface";
import FeedController from "../controllers/feed.controller";

class FeedRoutes implements Routes {
  public path = "/feed";
  public router = Router();
  public feedController = new FeedController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/posts", this.feedController.getPosts);
    this.router.post("/posts", this.feedController.createPost);
  }
}

export default FeedRoutes;
