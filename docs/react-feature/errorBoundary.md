# ErrorBoundary 错误边界

演示如何使用 React 的 ErrorBoundary 来捕获和处理组件错误。

## 代码演示

```tsx
import ErrorBoundary from '../../src/basic/react_feature/ErrorBoundary';

export default () => <ErrorBoundary />;
```

## 说明

ErrorBoundary 是 React 提供的一种错误处理机制，可以捕获子组件树中的 JavaScript 错误，记录这些错误，并显示一个降级 UI，而不是让整个应用崩溃。

### 特性

- 捕获子组件树中的错误
- 显示降级 UI
- 记录错误信息

### 使用场景

- 防止整个应用因单个组件错误而崩溃
- 提供友好的错误提示
- 错误日志记录

