import { range } from "lodash";
import "./Loading.less";

export const Loading = () => {
  return (
    <div className="loadings">
      <div className="container circle">
        {range(0, 20, 1).map((value, index, array) => (
          <div className="dot" style={{ "--index": index }} />
        ))}
      </div>

      <div className="container wave">
        {range(0, 10, 1).map((value, index, array) => (
          <div className="line" style={{ "--index": index }} />
        ))}
      </div>
    </div>
  );
};
