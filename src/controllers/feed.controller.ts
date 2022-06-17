import {Request, Response, NextFunction} from "express";

class FeedController{
    /**
     * @desc    Description
     * @route   GET /path
     * @access  Public
     */
    public methodName(req: Request, res: Response) {
        res.send('Hello World!');
    }
}

export default FeedController