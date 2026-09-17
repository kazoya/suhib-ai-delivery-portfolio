import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataRoot = join(root, "data");
const publicRoot = join(root, "public");
const assetPattern = /["'`]\/(screenshots|fun)\/[^"'`]+\.(?:avif|gif|jpe?g|png|svg|webp)["'`]/gi;

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? sourceFiles(path) : [path];
    }),
  );
  return files.flat().filter((path) => /\.(?:ts|tsx)$/.test(path));
}

const references = new Map();
for (const source of await sourceFiles(dataRoot)) {
  const content = await readFile(source, "utf8");
  for (const match of content.matchAll(assetPattern)) {
    const url = match[0].slice(1, -1);
    const locations = references.get(url) ?? [];
    locations.push(relative(root, source));
    references.set(url, locations);
  }
}

const failures = [];
for (const [url, locations] of references) {
  const diskPath = join(publicRoot, url.slice(1));
  try {
    const info = await stat(diskPath);
    if (!info.isFile() || info.size === 0) failures.push(`${url} is empty or not a file (${locations.join(", ")})`);
  } catch {
    failures.push(`${url} is missing (${locations.join(", ")})`);
  }
}

if (failures.length) {
  console.error("Public asset integrity check failed:\n" + failures.map((x) => `- ${x}`).join("\n"));
  process.exit(1);
}

console.log(`Public asset integrity check passed: ${references.size} referenced assets found.`);

