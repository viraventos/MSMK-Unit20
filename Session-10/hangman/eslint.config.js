import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: {
      globals: {
      //  process: "readonly",
        ...globals.browser
      }
    } 
  },
  // ✅ Configuración específica para tests
  {
    files: ["**/*.spec.js", "**/*.test.js"],
    plugins: {
      jest
    },
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  }
]);
