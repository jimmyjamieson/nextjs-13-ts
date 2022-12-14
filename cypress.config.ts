// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'kzwtty',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
