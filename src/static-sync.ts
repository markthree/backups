/** 静态的同步，用于编译后给 windows 的每日计划任务 */

import {
  ensureDir,
  ensureLink,
  walk,
} from "https://deno.land/std@0.167.0/fs/mod.ts";
import { join, normalize } from "https://deno.land/std@0.167.0/path/mod.ts";

/** 以下路径请用绝对路径 */
const src = normalize("D:/Data/important"); // 目标目录
const dest = normalize("D:/Backups"); // 备份目录

for await (const entry of walk(src)) {
  const { path, isFile, isDirectory, name } = entry;

  if (isDirectory && path !== src) {
    const destDir = join(dest, name);
    await ensureDir(destDir);
  }

  if (isFile) {
    try {
      const destDir = join(dest, path.replace(src, "").replace(name, ""));
      await ensureLink(path, join(destDir, name));
    } catch {
      // 在 windows 中仍然会出错，需要忽略
    }
  }
}
