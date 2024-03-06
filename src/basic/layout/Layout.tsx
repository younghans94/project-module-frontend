import { Input, InputRef } from "antd";
import { CSSProperties, useRef, useState } from "react";

import "./Layout.less";
import { jsonUtils } from "../utils/jsonUtils";

const WidgetExampleSize = 2;
const LayoutExampleSize = 2;

export const Layout = () => {
  const [style, setStyle] = useState<CSSProperties[]>([]);
  const InputsRef = useRef<InputRef[]>([]);

  const InputComponent = (index: number) => {
    return (
      <Input
        ref={(ref) => (InputsRef.current[index] = ref)}
        onPressEnter={() => {
          const newStyles = style.slice();
          if (newStyles[index]) {
            newStyles[index] = jsonUtils.parse(InputsRef.current[index].input.value || "{}");
          } else {
            newStyles.splice(
              index,
              0,
              jsonUtils.parse(InputsRef.current[index].input.value || "{}"),
            );
          }
          setStyle(newStyles);
        }}
      />
    );
  };

  return (
    <div className="layout">
      {new Array(WidgetExampleSize).fill(0, 0, WidgetExampleSize).map((v, index) => {
        return (
          <div className="widget-container">
            {InputComponent(index)}
            <div className="exhibition" style={style[index]} children={1} />
          </div>
        );
      })}
      {new Array(LayoutExampleSize).fill(0, 0, WidgetExampleSize).map((v, index) => {
        const realIndex = index + WidgetExampleSize;
        return (
          <div className="layout-container" style={style[realIndex]}>
            {InputComponent(realIndex)}
            <div className="exhibition" children={1} />
            <div className="exhibition" children={2} />
            <div className="exhibition" children={3} />
            <div className="exhibition" children={4} />
            <div className="exhibition" children={5} />
            <div className="exhibition" children={6} />
            <div className="exhibition" children={7} />
            <div className="exhibition" children={8} />
            <div className="exhibition" children={9} />
          </div>
        );
      })}
    </div>
  );
};
