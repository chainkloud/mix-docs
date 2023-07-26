import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/36bbcf7c-e3ba-430e-b4d0-7fdca247925b/github/master', token: 'e1318f0b8a10aff0dab8014a47fb269954e82d19', queries });
export default client;
  