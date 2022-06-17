import App from './app';

import FeedRoute from "./routes/feed.route";

const app = new App([new FeedRoute()]);

app.listen();