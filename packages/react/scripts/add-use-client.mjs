import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const directive = '"use client";\n';

for (const file of ["index.js", "index.cjs"]) {
  const path = join(dist, file);
  if (!existsSync(path)) continue;
  const code = readFileSync(path, "utf8");
  if (code.startsWith('"use client"') || code.startsWith("'use client'")) continue;
  writeFileSync(path, directive + code);
  console.log(`added "use client" to dist/${file}`);
}
