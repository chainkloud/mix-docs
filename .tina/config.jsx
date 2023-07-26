import React from "react";
import { defineConfig, TextField } from "tinacms";
import { ReferenceField } from "tinacms";
import { FeaturesBlockTemplate } from "../src/components/Features/template";
import { HeroBlockTemplate } from "../src/components/Hero/template";
import { MDXTemplates } from "../src/theme/template";
import { docusaurusDate, titleFromSlug } from "../util";
import title from "title";

// Your hosting provider likely exposes this as an environment variable
const branch =
  "main";

const DocsCollection = {
  name: "doc",
  label: "Docs",
  path: "docs",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar-position",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates],
    },
  ],
};

const DropdownCollection = {
  name: "dropdowns",
  label: "Generated Indexes",
  path: "docs",
  format: "json",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "number",
      name: "position",

    },
  ],
};





export default defineConfig({
  branch,
  clientId: process.env.clientId, // Get this from tina.io
  token: process.env.token, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      DocsCollection,
      DropdownCollection
    ],
  },
});
