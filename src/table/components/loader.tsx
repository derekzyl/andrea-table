import { useState } from "react";

import "../loader.css";

export function SkeletonLoader({
  data,
}: {
  data: { rows: number; cells: number };
}) {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => setLoading(false), 20000);

  return (
    <>
      {loading ? (
        <>
          {[...Array(data.rows)].map((_, rowIndex) => (
            <tr key={rowIndex} className="loading-cell">
              {[...Array(data.cells)].map((_, cellIndex) => (
                <td key={cellIndex}></td>
              ))}
            </tr>
          ))}
        </>
      ) : (
        <tr>
          <td colSpan={data.cells} className="no-data-message">
            <div
              className="items-center flex justify-center align-middle flex-col "
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="text-lg"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              >
                no data found 😢
              </div>
              <div
                className="text-xs"
                style={{
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                }}
              >
                {" "}
                kindly check for internet connectivity and retry
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default SkeletonLoader;
