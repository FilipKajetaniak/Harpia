import React, { FC, useState, MouseEvent } from "react";

import { Column } from "components/Column/Column";

import "./Grid.sass";

interface Column {
  id: string;
}

export const Grid: FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const addColumn = (event: MouseEvent<HTMLDivElement>) => {
    setColumns([...columns, { id: String(new Date().getTime()) }]);
  };
  return (
    <main className="grid">
      {columns.map(column => (
        <Column key={column.id} />
      ))}
      <div className="add-column" onClick={addColumn}>
        <div className="add-button">+</div>
      </div>
    </main>
  );
};
