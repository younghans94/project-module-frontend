import "./Amimate.less";
import { useSpringValue, animated } from "@react-spring/web";
import { useEffect } from "react";

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
