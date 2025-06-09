import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import fs from "fs";

export default defineConfig(({ command }) => {
  return {
    root: "./src",
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          assetFileNames: (assetInfo) => {
            return assetInfo.name && assetInfo.name.endsWith(".html")
              ? "[name].[ext]"
              : "assets/[name]-[hash][extname]";
          },
        },
      },
    },
    server: {
      historyApiFallback: true,
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          postcssSortMediaQueries({
            sort: "mobile-first",
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          api: "legacy",
          additionalData: `@use "./src/styles/vars.scss";`,
        },
      },
    },
    plugins: [
      injectHTML({
        injectData: {
          header: fs.readFileSync(path.resolve(__dirname, "src/components/header.html"), "utf8"),
          footer: fs.readFileSync(path.resolve(__dirname, "src/components/footer.html"), "utf8"),
        },
      }),
      viteStaticCopy({
        targets: [
          {
            src: "*.php",
            dest: ".",
          },
        ],
      }),
      FullReload(["./src/**/*.html", "./src/**/*.scss"]),
      ViteImageOptimizer({
        svg: {
          plugins: ["removeDoctype", "removeXMLProcInst", "minifyStyles", "sortAttrs", "sortDefsChildren"],
        },
        png: {
          quality: 85,
        },
        jpeg: {
          quality: 85,
        },
        jpg: {
          quality: 85,
        },
      }),
    ],
  };
});
