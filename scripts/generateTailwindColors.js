// scripts/generateTailwindColors.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import colors from "../src/styles/colors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lightColors = colors.light;

const colorEntries = Object.entries(lightColors)
  .map(([key, value]) => `      ${key}: "${value}",`)
  .join("\n");

// Create the full block to insert
const generatedBlock = `colors: {\n${colorEntries}\n    },`;

// Path to tailwind config
const configPath = path.resolve(__dirname, "../tailwind.config.js");
let configContent = fs.readFileSync(configPath, "utf-8");

// Replace the old `colors: { ... }` inside `extend`
configContent = configContent.replace(
  /colors:\s*\{[\s\S]*?\},/m,
  generatedBlock
);

// Write it back
fs.writeFileSync(configPath, configContent);

console.log("✅ Tailwind colors section updated in tailwind.config.js");
