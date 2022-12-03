/** 静态的同步，用于编译后给 windows 的每日计划任务 */

import { ensureLink, walk } from "https://deno.land/std@0.167.0/fs/mod.ts";
import { basename, join } from "https://deno.land/std@0.167.0/path/mod.ts";

/** 以下路径请用绝对路径 */
const src = "D:/Data/important"; // 目标目录
const dest = "D:/Backups"; // 备份目录

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
