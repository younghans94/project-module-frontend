import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Effect = () => {

  const [color, setColor] = useState("red");

  console.log("🔸 Render:", color);

  // ============ 用 useEffect 试试看 ============
  // useEffect(() => {
  //   console.log("🟢 useEffect runs");
  //   if (color === "red") {
  //     // 模拟修改 DOM 样式
  //     setColor("blue");
  //   }
  // }, [color]);

  // ============ 改成 useLayoutEffect 对比 ============
  useLayoutEffect(() => {
    console.log("🔵 useLayoutEffect runs");
    if (color === "red") {
      setColor("blue");
    }
  }, [color]);

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: color,
        transition: "background 0.2s"
      }}
    >
      <h3>{color}</h3>
    </div>
  );
};
