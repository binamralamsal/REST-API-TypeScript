import App from "./app";

import { AuthRoutes } from "./routes";

const app = new App([new AuthRoutes()]);

app.listen();
