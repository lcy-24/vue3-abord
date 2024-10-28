<div align="center"> <a href="https://github.com/anncwb/vue-vben-admin"> <img alt="VbenAdmin Logo" width="215" src="https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp"> </a> <br> <br>

<h1>Vue Vben Admin</h1>

**中文**

## 简介

Vue Vben Admin 是 Vue Vben Admin 的升级版本。作为一个免费开源的中后台模板，它采用了最新的 Vue 3、Vite、TypeScript 等主流技术开发，开箱即用，可用于中后台前端开发，也适合学习参考。

## 升级提示

该版本为最新版本`5.0`, 与其他版本不兼容，如果你是新项目，建议使用最新版本。

## 特性

- **最新技术栈**：使用 Vue3/vite 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **主题**：提供多套主题色彩，可配置自定义主题
- **国际化**：内置完善的国际化方案
- **权限** 内置完善的动态路由权限生成方案

## 预览

- [Vben Admin](https://vben.pro/) - 完整版中文站点

测试账号: vben/123456

## 文档

[文档地址](https://doc.vben.pro/)

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/vbenjs/vue-vben-admin.git
```

- 安装依赖

```bash
cd vue-vben-admin

corepack enable

pnpm install
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feature/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feature/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
