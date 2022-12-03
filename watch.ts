import { dest, src } from "./path.ts";
import { basename, join } from "https://deno.land/std@0.167.0/path/mod.ts";

const watcher = Deno.watchFs(src);

for await (const event of watcher) {
  if (event.kind === "create") {
    event.paths.forEach((path) => {
      Deno.link(path, join(dest, basename(path)));
    });
  }
}
