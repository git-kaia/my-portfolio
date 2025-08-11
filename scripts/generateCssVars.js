// scripts/generateCssVars.js
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import colors from "../src/styles/colors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateCssVars(obj, prefix = "") {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return generateCssVars(value, prefix);
      }
      return `  --${key}: ${value};`;
    })
    .join("\n");
}

const cssVarsLight = generateCssVars(colors.light);
const cssVarsDark = generateCssVars(colors.dark);

const cssContent = `
:root {\n${cssVarsLight}\n}\n\n.dark {\n${cssVarsDark}\n}`;

// Resolve the output path relative to current script directory
const outPath = path.resolve(__dirname, "../src/styles/colors.css");

fs.writeFileSync(outPath, cssContent);

console.log("CSS variables generated at", outPath);
