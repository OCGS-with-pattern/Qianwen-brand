# Shortdrama Cat Brand Assets

短剧猫品牌图形资产包，可直接作为静态目录发布到 Git 仓库、OSS Bucket 或任意 CDN。

## Directory

- `png/` - 透明 PNG，包含 `16/32/48/64/128/256/512` 多尺寸。
- `svg/` - SVG 包装文件，引用 512 PNG 作为当前 v1 图形源。
- `anime/shortdrama-cat-motion.css` - 零依赖动画样式。
- `anime/shortdrama-cat-motion.js` - 零依赖 Web Component：`<shortdrama-cat-motion>`。
- `index.html` - 本地/OSS 预览页。

## Variants

- `player-cat` - 电影播放按钮 + 猫头，主品牌标识。
- `cat-head` - 猫头，用于小尺寸头像、徽章、加载态。
- `cat-search` - 带放大镜猫头，用于图片助手插件图标。

## Web Component

```html
<script src="./anime/shortdrama-cat-motion.js"></script>

<shortdrama-cat-motion
  variant="player-cat"
  motion="enter"
  theme="color"
  size="lg"
  label="短剧猫">
</shortdrama-cat-motion>
```

### Attributes

| Attribute | Values | Default |
| --- | --- | --- |
| `variant` | `player-cat`, `cat-head`, `cat-search` | `player-cat` |
| `motion` | `idle`, `enter`, `loader`, `pulse`, `success`, `error`, `reveal` | `idle` |
| `theme` | `color`, `dark`, `light`, `mono` | `color` |
| `size` | `xs`, `sm`, `md`, `lg`, `xl` | `md` |
| `paused` | boolean | off |
| `label` | string | `短剧猫品牌图形` |

## OSS Usage

上传整个目录后，可以直接引用：

```html
<script src="https://your-cdn.example.com/shortdrama-cat/anime/shortdrama-cat-motion.js"></script>
<shortdrama-cat-motion variant="cat-search" motion="reveal" size="lg"></shortdrama-cat-motion>
```

静态 PNG 示例：

```html
<img src="https://your-cdn.example.com/shortdrama-cat/png/player-cat-512.png" alt="短剧猫">
```
