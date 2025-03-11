import "./Amimate.less";
import { Button } from "@fx-ui/fine-design";
import { useSpringValue, animated, useTransition } from "@react-spring/web";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

export const Animate = () => {
  const width = useSpringValue(0, {
    config: {
      // duration: 2000,
      // 质量：越大回弹惯性越大回弹的距离和次数就越多
      mass: 20,
      // 张力：弹簧的弹性系数
      tension: 400,
      // 摩擦力：可抵消质量和张力的效果
      friction: 10,
    },
  });

  useEffect(() => {
    width.start(1000);
  }, []);

  return <animated.div className="box" style={{ width }}></animated.div>;
};

export const SlideOverLayer = () => {
  const [items, setItems] = useState([<div className={"slide-over-layer-content"} />]);
  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const onAdd = () => {
    if (isEmpty(items)) {
      setItems([<div className={"slide-over-layer-content"} />]);
    } else {
      setItems([...items, <div className={"slide-over-layer-content"} />]);
    }
  };

  const onDelete = () => {
    items.pop();
    setItems([...items]);
  };

  return (
    <>
      <Button onClick={onAdd}></Button>
      <Button onClick={onDelete}></Button>
      {transitions((style, item) => (
        <animated.div style={{ opacity: style.opacity }}>{item}</animated.div>
      ))}
    </>
  );
};

export const MyComponent = ({ data = [1, 2, 3] }) => {
  const transitions = useTransition(data, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return transitions((style, item) => <animated.div style={style}>{item}</animated.div>);
};
