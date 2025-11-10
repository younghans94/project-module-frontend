# useEffect vs useLayoutEffect

演示 useEffect 和 useLayoutEffect 的区别。

## 代码演示

```tsx
import { Effect } from '../../src/basic/react_feature/Effect';

export default () => <Effect />;
```

## 说明

- `useEffect` 在浏览器绘制之后异步执行
- `useLayoutEffect` 在浏览器绘制之前同步执行，会阻塞浏览器绘制

