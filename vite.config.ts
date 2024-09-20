import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AndreaTable",
      fileName: (format) => `index.${format}.js`,
      // formats: ["es", "cjs", ],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
        libCss()
  ],
});
