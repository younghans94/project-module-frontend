---
title: Project Module 组件库
---

# Project Module 组件库

欢迎使用 Project Module 组件库！

## 简介

这是一个基于 React 的组件库，包含了各种实用的组件和示例。

## 目录结构

- **动画组件** - 包含各种动画效果组件
- **业务组件** - 包含常用的业务组件
- **React 特性** - React 特性的演示和示例
- **CSS 实例** - CSS 技巧和实例

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建文档
pnpm docs:build
```

## 测试组件

```tsx
import React from 'react';

export default () => {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h2>测试内容</h2>
      <p>如果你能看到这个内容，说明 dumi 已经正常工作了！</p>
    </div>
  );
};
```

