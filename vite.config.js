import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // এই লাইনটি যোগ করো
  build: {
    outDir: "dist",
  },
  server: {
    host: true, // ✅ লোকাল নেটওয়ার্ক থেকেও অ্যাক্সেস করা যাবে
    port: 8200, // ✅ নির্দিষ্ট পোর্টে সার্ভার চলবে
  },
});
