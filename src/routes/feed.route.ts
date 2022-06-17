import { Router } from 'express';

import Routes from '../interfaces/routes.interface';
import FeedController from "../controllers/feed.controller";

class FeedRoutes implements Routes {
    public path = '/';
    public router = Router();
    public feedController = new FeedController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
    }
}

export default FeedRoutes;