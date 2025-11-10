import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid #ff4d4f', borderRadius: '4px', background: '#fff2f0' }}>
          <h3 style={{ color: '#ff4d4f', marginTop: 0 }}>出错了！</h3>
          <p>{this.state.error?.message || '发生了未知错误'}</p>
          {this.state.errorInfo && (
            <details style={{ marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', color: '#666' }}>错误详情</summary>
              <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

// 一个会抛出错误的组件用于演示
const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  // 模拟一个错误
  const throwError = () => {
    throw new Error('这是一个测试错误！');
  };

  // 在渲染时抛出错误（这会被 ErrorBoundary 捕获）
  if (shouldThrow) {
    // 这会触发渲染错误，会被 ErrorBoundary 捕获
    throw new Error('这是一个渲染错误！');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>正常内容</h3>
      <p>这是一个正常的组件内容。</p>
      <button
        onClick={() => {
          try {
            throwError();
          } catch (error) {
            console.error('事件处理器错误:', error);
            alert('事件处理器错误（不会被 ErrorBoundary 捕获）');
          }
        }}
        style={{ padding: '8px 16px', marginTop: '10px' }}
      >
        点击触发错误（事件处理器）
      </button>
    </div>
  );
};

const ErrorComponent = () => {
  const b = (window as any).a.b;
  return <div>{b}</div>;
}

const IErrorBoundary = () => {
  const [shouldThrow, setShouldThrow] = React.useState(false);
  const [key, setKey] = React.useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setShouldThrow(true)}
          style={{ padding: '8px 16px', marginRight: '10px' }}
        >
          触发渲染错误（会被捕获）
        </button>
        <button
          onClick={() => {
            setShouldThrow(false);
            setKey(prev => prev + 1);
          }}
          style={{ padding: '8px 16px' }}
        >
          重置
        </button>
      </div>
      <ErrorBoundary key={key}>
        <BuggyComponent shouldThrow={shouldThrow} />
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  );
};

export default IErrorBoundary;
