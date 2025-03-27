import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./__tests__/setup.tsx"],
    environment: "jsdom",
    alias: {
      "@/app": path.resolve(__dirname, "app"),
    },
  },
});
