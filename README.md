# Elow - 优雅的 macOS 风格浏览器新标签页扩展

<p align="center">
  <b>Elow</b> 是一款现代、优雅且高颜值的浏览器 New Tab 扩展插件，灵感来自 macOS 设计美学与 <a href="https://github.com/DavidHDev/react-bits">React Bits</a> 交互组件生态。
</p>

---

## ✨ 特性一览

- 🍎 **macOS 风格物理 Dock 栏**：基于原生弹性物理插值算法，支持平滑缩放、弹跳启动指示（Hop bounce）、未读徽章与 Apple 风格右键气泡菜单。
- 🔮 **3D WebGL2 毛玻璃启动网格（GlassIcons）**：具备真实光学折射、斜边高光与 3D 倾斜底盘的快捷启动图标。
- 📁 **macOS 拟物交互文件夹（Folder）**：支持点击展开 3D 封皮并磁吸弹出快捷卡片。
- 🌄 **全屏壁纸**：支持高清全景壁纸与沉浸式暗角视效。
- ⚡ **Manifest V3 兼容**：完全符合 Chrome / Edge 最新扩展规范，冷启动极速渲染。

---

## 🚀 快速开始

### 1. 本地开发与实时预览

```bash
# 安装依赖
npm install

# 启动开发服务器（秒级热更新）
npm run dev
```

在浏览器中打开 `http://localhost:5173/` 即可体验。

### 2. 编译打包与安装到浏览器

```bash
npm run build
```

构建完成后将在根目录生成 `dist/` 文件夹。

#### 加载到 Chrome / Edge 浏览器：
1. 打开浏览器并访问扩展管理页面：`chrome://extensions/`（Edge 为 `edge://extensions/`）；
2. 开启右上角的 **“开发者模式”**（Developer mode）；
3. 点击左上角的 **“加载已解压的扩展程序”**（Load unpacked）；
4. 选择当前项目下的 `dist/` 目录；
5. 新建标签页即可体验 Elow！

---

## 🛠️ 技术栈

- **框架**：React 18
- **构建工具**：Vite 5
- **组件灵感与复用**：[React Bits](https://github.com/DavidHDev/react-bits)
- **图标库**：Lucide React
- **规范**：Chrome Extension Manifest V3

---

## 📄 开源许可

本项目遵循 MIT 协议。部分组件代码派生自 React Bits（MIT + Commons Clause）。
