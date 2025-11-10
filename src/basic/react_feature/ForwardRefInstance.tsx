import React, { forwardRef, useRef, useImperativeHandle, ForwardedRef } from "react";
import "./ForwardRefInstance.less";

// 子组件暴露的方法接口
interface SonRef {
  focus: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

// 父组件暴露的方法接口
interface FatherRef {
  sonRef: SonRef;
  fatherDom: HTMLDivElement | null;
  scrollToTop: () => void;
}

// 子组件属性接口
interface SonProps {
  label?: string;
}

const SonComponent = forwardRef(({ label = "输入框" }: SonProps, ref: ForwardedRef<SonRef>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    ...inputRef,
    focus: () => {
      inputRef.current?.focus();
    },
    getValue: () => {
      return inputRef.current?.value || "";
    },
    setValue: (value: string) => {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    },
  }));

  return (
    <div className="son-component">
      <label>{label}</label>
      <input ref={inputRef} type="text" placeholder="子组件输入框" />
    </div>
  );
});

interface FatherProps {
  title?: string;
}

const FatherComponent = forwardRef(
  ({ title = "父组件" }: FatherProps, ref: ForwardedRef<FatherRef>) => {
    const fatherDomRef = useRef<HTMLDivElement>(null);
    const sonComponentRef = useRef<SonRef>(null);

    useImperativeHandle(ref, () => ({
      sonRef: sonComponentRef.current!,
      fatherDom: fatherDomRef.current,
      scrollToTop: () => {
        fatherDomRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    return (
      <div className="father-component" ref={fatherDomRef}>
        <h3>{title}</h3>
        <div className="father-content">
          {/* 添加一些内容使其可滚动 */}
          <p>父组件的一些内容...</p>
          <p>更多内容...</p>
        </div>
        <SonComponent ref={sonComponentRef} />
      </div>
    );
  },
);

const GrandfatherComponent = () => {
  const fatherRef = useRef<FatherRef>(null);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const handleFocus = () => {
    fatherRef.current?.sonRef.focus();
  };

  const handleSetValue = () => {
    fatherRef.current?.sonRef.setValue("Hello from grandfather!");
  };

  const handleGetValue = () => {
    const value = fatherRef.current?.sonRef.getValue();
    alert(`当前输入框的值: ${value}`);
  };

  const handleFatherScroll = () => {
    fatherRef.current?.scrollToTop();
  };

  const handleGetFatherHeight = () => {
    const height = fatherRef.current?.fatherDom?.offsetHeight;
    alert(`父组件高度: ${height}px`);
  };

  return (
    <div className="grandfather-component">
      <h2>祖父组件</h2>
      <div className="button-group">
        <button onClick={handleFocus}>聚焦输入框</button>
        <button onClick={handleSetValue}>设置值</button>
        <button onClick={handleGetValue}>获取值</button>
        <button onClick={handleFatherScroll}>滚动到父组件顶部</button>
        <button onClick={handleGetFatherHeight}>获取父组件高度</button>
      </div>
      <FatherComponent ref={fatherRef} />
    </div>
  );
};

export default GrandfatherComponent;
