#!/usr/bin/env node
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC = "imagens piscinas-cidades";
const OUT = "public/images/locations";
const WIDTH = 1600;
const QUALITY = 80;

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.png$/i.test(f));
let total = 0;
let totalIn = 0;
let totalOut = 0;

for (const file of files) {
  const { name } = parse(file);
  const slug = slugify(name);
  const inPath = join(SRC, file);
  const outPath = join(OUT, `${slug}.webp`);

  const inStat = await stat(inPath);
  await sharp(inPath)
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);
  const outStat = await stat(outPath);

  totalIn += inStat.size;
  totalOut += outStat.size;
  total++;
  console.log(
    `${slug.padEnd(22)}  ${(inStat.size / 1024 / 1024).toFixed(1).padStart(5)}MB → ${(outStat.size / 1024).toFixed(0).padStart(4)}KB`
  );
}

console.log("");
console.log(`Done: ${total} files`);
console.log(`Total in:  ${(totalIn / 1024 / 1024).toFixed(0)} MB`);
console.log(`Total out: ${(totalOut / 1024 / 1024).toFixed(1)} MB`);
