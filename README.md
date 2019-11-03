# babel-plugin-load-on-demand

按需加载模块

## 安装

```javascript
npm install babel-plugin-load-on-demand -d
```

## 实例

转换前

```javascript
import { Dialog } from "@mc/mc-components/packages"
```

转换后

```javascript
import Dialog from "@mc/mc-components/packages/Dialog"
```

## 用法

在你的 `.babelrc` 中添加如下代码块

```javascript
{
    "plugins": [["babel-plugin-load-on-demand", {"libraryName": "@mc/mc-components/packages"}]]
}
```