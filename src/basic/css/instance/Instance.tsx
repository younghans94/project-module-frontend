// import { Space } from "antd";
import classNames from "classnames";

import "./Instance.less";
import { useEffect, useState } from "react";

export const Instance = () => {
  const [height, setHeight] = useState(50);

  useEffect(() => {
    // setHeight(50);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div className="instance first"></div>
      <div className={classNames("instance", "second")}></div>
      <div className="container">
        <div className="instance third" style={{ height }} onClick={() => setHeight(height + 10)}>
          <div style={{ flex: 1, height: "100%" }} />
        </div>
      </div>
    </div>
  );
};
