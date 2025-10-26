import { List } from "antd";
import React from "react";

const VirtualListDemo = () => {
  const [items, setItems] = React.useState([
    { value: "item1", key: "1" },
    { value: "item2", key: "2" },
    { value: "item3", key: "3" },
    { value: "item4", key: "4" },
    { value: "item5", key: "5" },
    { value: "item6", key: "6" },
    { value: "item7", key: "7" },
    { value: "item8", key: "8" },
    { value: "item9", key: "9" },
    { value: "item10", key: "10" },
    { value: "item11", key: "11" },
    { value: "item12", key: "12" },
  ]);

  return (
    <List dataSource={items} renderItem={(item) => <div>{item.value}</div>} />
  );
};

export default VirtualListDemo;
