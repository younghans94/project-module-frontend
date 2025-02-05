import VirtualList from "@fx-ui/fine-design/es/components/virtual-list";
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
    <VirtualList
      virtual
      data={items}
      className="ep-list"
      itemHeight={10}
      height={100}
      itemKey={"key"}
    >
      {(item) => {
        return <li>{item.value}</li>;
      }}
    </VirtualList>
  );
};

export default VirtualListDemo;
