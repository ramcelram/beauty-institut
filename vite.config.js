import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/beauty-institut/", // <- ajoute cette ligne, avec le nom de ton repo GitHub
  plugins: [react()],
});
