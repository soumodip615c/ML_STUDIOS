function DatasetPreview({ rows, columns }) {
  if (!rows.length) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">
          Dataset Preview
        </h2>

        <span className="text-sm text-gray-500">
          Showing {Math.min(10, rows.length)} of {rows.length} rows
        </span>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full text-sm">

          <thead className="bg-slate-100">

            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left border font-semibold whitespace-nowrap"
                >
                  {column}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>

            {rows.slice(0, 10).map((row, index) => (

              <tr
                key={index}
                className="hover:bg-slate-50"
              >

                {columns.map((column) => (

                  <td
                    key={column}
                    className="px-4 py-3 border whitespace-nowrap"
                  >
                    {String(row[column] ?? "")}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DatasetPreview;