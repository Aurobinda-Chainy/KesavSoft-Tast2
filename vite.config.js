import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
     base: "/KesavSoft-Tast2/",
  build: {
    outDir: "dist",
  },
  plugins: [
    handlebars({
      partialDirectory: "src/templates/partials",
    }),
  ],
});
