import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/36bbcf7c-e3ba-430e-b4d0-7fdca247925b/github/master', token: 'ab9e859263dc92873912f80936f36774c88ce4ba', queries });
export default client;
  