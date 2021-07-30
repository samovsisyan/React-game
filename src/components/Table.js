import React, { useState, useEffect } from "react";
import Fields from "./Fields";
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCounts,
} from "../helpers";

const Table = () => {
  const mapSize = 10;
  const bombCount = 10;
  const [cellsClicked, setCellsClicked] = useState(1);
  const [table, setTable] = useState(null);

  useEffect(() => {
    if (table === null)
      setTable(
        valsAdjacentCounts(
          populateNestedArray(nestedArray(mapSize, mapSize), "x", bombCount),
          "x"
        )
      );
  }, [table]);




  return (
    <div className="content">

      <table>
        <tbody>
          {table &&
          table.map((item, row) => (
              <tr key={row} className="mapRow">
                {item.map((subitem, col) => (
                  <Fields
                    key={col}
                    row={row}
                    column={col}
                    value={subitem}
                  />
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
