# deno-backups

由 `Deno` 实现的硬链接备份

<br />

## Motivation

对某一重要文件夹数据进行跨目录备份。

<br />

## Stack

- [Deno](https://deno.land/)

<br />

## Usage

### 运行

1. 监听

```shell
deno task start:watch {目标目录} {备份目录}
```

2. 同步

```shell
deno task start:sync {目标目录} {备份目录}
```

3. 静态同步

> 静态的同步，用于编译后给 windows 的每日计划任务，路径前往 [static-sync.ts](./static-sync.ts) 修改

```shell
deno task start:static-sync
```

<br />

### 编译

1. 监听

```shell
deno task compile:watch
```

2. 同步

```shell
deno task compile:sync
```

3. 静态同步

```shell
deno task compile:static-sync
```

<br />

### 后台进程

#### Windows

##### 监听

```shell
start /B deno task start:watch {目标目录} {备份目录}
```

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
