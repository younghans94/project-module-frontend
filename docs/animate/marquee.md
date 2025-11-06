# Marquee 跑马灯

一个文字跑马灯组件，支持自动滚动和首尾连接效果。

## 代码演示

```tsx
import Marquee from '../../src/basic/animate/marquee/Marquee';

export default () => (
  <div style={{ width: '300px', overflow: 'hidden' }}>
    <Marquee text="这是一段很长的文字，用于测试跑马灯效果，文字会自动滚动显示" />
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 要滚动的文字 | `string` | - |
| className | 自定义类名 | `string` | - |

