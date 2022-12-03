import {
  basename,
  isAbsolute,
  join,
  normalize,
} from "https://deno.land/std@0.167.0/path/mod.ts";

import { ensureDir } from "https://deno.land/std@0.167.0/fs/mod.ts";

function normalizePath(path: string) {
  if (!isAbsolute(path)) {
    path = join(Deno.cwd(), path);
  }
  return normalize(path);
}

if (Deno.args.length !== 2) {
  throw new Error("源和输出是必需的");
}

const paths = Deno.args.map((p) => normalizePath(p));

await Promise.all(paths.map((p) => ensureDir(p)));

const [src, dest] = paths;

const watcher = Deno.watchFs(src);

for await (const event of watcher) {
  if (event.kind === "create") {
    event.paths.forEach((path) => {
      Deno.link(path, join(dest, basename(path)));
    });
  }
}
