import React from "react";
import ListItem from "./ListItem/ListItem";

function List({ items, listTitle }) {
  return (
    <div className="py-6 border-b-2">
      <p className="uppercase font-bold text-sm mb-3">{listTitle}</p>
      <div>
        {items.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
}

export default List;
