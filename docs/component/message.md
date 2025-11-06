# Message 消息提示

一个全局消息提示组件，支持多种类型和位置。

## 代码演示

```tsx
import { Message, TriggerButton } from '../../src/basic/component/message/Message';
import { MessageProvider } from '../../src/basic/component/message/useMessageStore';

export default () => (
  <MessageProvider>
    <div>
      <TriggerButton />
      <Message />
    </div>
  </MessageProvider>
);
```

## API

### MessageProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 消息类型 | `'success' \| 'error' \| 'warning' \| 'info'` | - |
| content | 消息内容 | `ReactNode` | - |
| duration | 显示时长（毫秒） | `number` | - |
| id | 消息唯一标识 | `number` | - |
| position | 显示位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | - |

