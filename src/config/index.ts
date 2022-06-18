import "dotenv/config";
import { cleanEnv, str, num } from "envalid";

const config = cleanEnv(process.env, {
  MONGODB_URI: str(),
  NODE_ENV: str({
    choices: ["development", "production"],
    default: "development",
  }),
  PORT: num({
    default: 3000,
  }),
});

export default config;
