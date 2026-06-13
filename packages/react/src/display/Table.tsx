import type { ReactNode } from "react";

export interface TableProps {
  columns: string[];
  rows: ReactNode[][];
}

export function Table({ columns, rows }: TableProps) {
  return (
    <table className="aero-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
