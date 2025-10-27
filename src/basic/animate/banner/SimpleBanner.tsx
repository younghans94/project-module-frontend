import React from "react";
import "./SimpleBanner.less";

const SimpleBanner: React.FC = () => {
  return (
    <div className="simple-banner">
      {/* 背景层 - 移动最慢 */}
      <div className="layer background-layer">
        <div className="bg-pattern"></div>
      </div>

      {/* 中间层 - 中等速度 */}
      <div className="layer middle-layer">
        <div className="floating-element">🌟</div>
        <div className="floating-element">✨</div>
      </div>

      {/* 前景层 - 移动最快 */}
      <div className="layer foreground-layer">
        <div className="main-content">
          <h2>动画横幅</h2>
          <p>分层处理创造深度感</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
