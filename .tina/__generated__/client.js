import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2adf369caca8ed98266c0050c032d3559541d5da', queries });
export default client;
  