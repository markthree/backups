# backups

硬链接备份

<br />

## Motivation

对某一重要文件夹数据进行跨目录备份。

<br />

## Stack

- [Deno](https://deno.land/)

<br />

## Usage

### 运行

#### 监听

```shell
deno task start:watch {目标目录} {备份目录}
```

#### 同步

```shell
deno task start:sync {目标目录} {备份目录}
```

### 编译

#### 监听

```shell
deno task compile:watch
```

#### 同步

```shell
deno task compile:sync
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
