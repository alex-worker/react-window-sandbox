import React from "react";

import { VariableSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import getHeight from "./getHeight";

var calculatedHeight = [];

const Row = ({ row }) => {
  return <div className="list-item">{row.description}</div>;
};

const getItemHeight = (width, text) => {
  const height = getHeight({
    text,
    attributes: {
      width: width + "px"
    },
    className: "list-item"
  });
  return height;
};

const calcHeight = (width, list) => {
  calculatedHeight = list.map(item => {
    return getItemHeight(width, item.description);
  });
};

const List = ({ list }) => {
  return (
    <div className="list-place">
      <AutoSizer>
        {({ height, width }) => {
          calcHeight(width, list);
          return (
            <VariableSizeList
              height={height}
              width={width}
              itemCount={list.length}
              // itemSize={index => getItemHeight(width, list[index].description)}
              itemSize={index => calculatedHeight[index]}
              estimatedItemSize={10}
            >
              {({ index, style }) => (
                <div style={style}>
                  <Row row={list[index]} />
                </div>
              )}
            </VariableSizeList>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default List;
