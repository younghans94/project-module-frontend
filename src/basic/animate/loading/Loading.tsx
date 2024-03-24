import { range } from "lodash";
import "./Loading.less";

export const Loading = () => {
  return(
    <div className="g-container g-steps">
      {range(0,20,1).map(
        (value, index, array) => <div className="g-box" style={{ "--index": index }} />
      )}
    </div>
  );
};
