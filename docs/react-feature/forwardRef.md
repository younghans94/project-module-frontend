# forwardRef 示例

演示如何使用 forwardRef 和 useImperativeHandle 在组件间传递 ref。

## 代码演示

```tsx
import ForwardRefInstance from '../../src/basic/react_feature/forwardRefInstance';

export default () => <ForwardRefInstance />;
```

## 说明

该示例展示了：
- 子组件如何通过 `forwardRef` 暴露方法给父组件
- 父组件如何通过 `useImperativeHandle` 暴露方法给祖父组件
- 多层组件间的 ref 传递和使用

