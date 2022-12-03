import { dest, src } from "./path.ts";
import { ensureLink, walk } from "https://deno.land/std@0.167.0/fs/mod.ts";
import { basename, join } from "https://deno.land/std@0.167.0/path/mod.ts";

for await (const entry of walk(src)) {
  const { path } = entry;
  const ignore = path === src;
  if (!ignore) {
    try {
      await ensureLink(path, join(dest, basename(path)));
    } catch {
      // 在 windows 中仍然会出错，需要忽略
    }
  }
}
