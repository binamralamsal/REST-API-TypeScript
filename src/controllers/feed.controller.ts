import { Request, Response, NextFunction } from "express";

class FeedController {
  /**
   * @desc    Get all Posts
   * @route   GET /feed/posts
   * @access  Public
   */
  public getPosts(req: Request, res: Response) {
    res.status(200).json({
      posts: [{ title: "First Post", content: "This is the first post!" }],
    });
  }

  /**
   * @desc    Add new Posts
   * @route   POST /feed/posts
   * @access  Public
   */
  public createPost(req: Request, res: Response) {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
      message: "Post created successfully",
      post: {
        id: new Date().toISOString(),
        title,
        content,
      },
    });
  }
}

export default FeedController;
