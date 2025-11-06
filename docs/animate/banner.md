# Banner 横幅动画

支持多图层、滚动驱动的横幅动画组件。

## 代码演示

```tsx
import SimpleBanner from '../../src/basic/animate/banner/SimpleBanner';

export default () => (
  <SimpleBanner />
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layers | 图层配置数组 | `BannerLayer[]` | - |
| className | 自定义类名 | `string` | - |
| autoPlay | 是否自动播放 | `boolean` | `true` |
| loop | 是否循环播放 | `boolean` | `true` |

### BannerLayer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 图层唯一标识 | `string` | - |
| type | 图层类型 | `'image' \| 'video'` | - |
| src | 资源地址 | `string` | - |
| width | 宽度 | `number` | - |
| height | 高度 | `number` | - |
| translateX | X 轴偏移 | `number` | - |
| translateY | Y 轴偏移 | `number` | - |
| rotate | 旋转角度 | `number` | - |
| scale | 缩放比例 | `number` | - |
| opacity | 透明度 | `number` | - |
| zIndex | 层级 | `number` | - |

