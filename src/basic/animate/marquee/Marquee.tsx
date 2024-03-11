import classNames from "classnames";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import "./Marquee.less";

/**
 * @param text
 * @param className
 * @constructor
 * 功能点待实现: 文字首尾要能连起来-已经实现
 */
const Marquee = ({ text, className }: { text: string; className?: string }) => {
  const [animationConfig, setAnimationConfig] = useState({});

  const containerRef: LegacyRef<HTMLDivElement> = useRef(null);
  const textRef: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
    const textWidth = textRef.current?.getBoundingClientRect().width || 0;
    if (textWidth > containerWidth) {
      setAnimationConfig({
        animationDuration: text.length * 0.2 + 5 + "s",
        paddingLeft: "100%",
        textShadow: `${textWidth}px 0 red`,
      });
    }
    // 文字首尾要能连起来;
    // todo 文字起始位置可以解决
    // document.styleSheets[0].insertRule(
    //   `@keyframes marqueeAnim {
    //   0% { transform: translateX(calc(0% - ${containerWidth}px)); }
    //   100% { transform: translateX(-100%); }
    // }`,
    // );
    containerRef.current.style.setProperty("--text-container-width", `${containerWidth}px`);
  }, [text]);

  return (
    <div ref={containerRef} className={classNames("marquee-container")}>
      <div style={animationConfig} className="mobile-announcement-content">
        <span ref={textRef}>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
