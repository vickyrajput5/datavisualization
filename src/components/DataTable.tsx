import { SortOptions, Tip } from "@/lib/types";
import React from "react";

interface DataTableProps {
  data: Tip[];
  sortOptions: SortOptions;
  onSortChange: (column: keyof Tip) => void;
}

const DataTable = ({ data, sortOptions, onSortChange }: DataTableProps) => {
  const columns: (keyof Tip)[] = [
    "total_bill",
    "tip",
    "sex",
    "smoker",
    "day",
    "time",
    "size",
  ];
  return (
    <div>
      <div className='overflow-x-auto bg-white rounded-lg shadow'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
                  onClick={() => onSortChange(column)}
                >
                  <div className='flex items-center'>
                    {column.replace("_", " ")}
                    {sortOptions.column === column && (
                      <span className='ml-1'>
                        {sortOptions.direction === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((row, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                {columns.map((column) => (
                  <td
                    key={column}
                    className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
