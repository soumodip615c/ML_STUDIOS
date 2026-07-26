import { useState } from "react";
import Papa from "papaparse";

import UploadZone from "../components/UploadZone";
import DatasetInfoCard from "../components/DatasetInfoCard";
import DatasetPreview from "../components/DatasetPreview";

function Datasets() {
  const [fileName, setFileName] = useState("");
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [fileSize, setFileSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = (file) => {
    setLoading(true);
    setError("");

    setFileName(file.name);
    setFileSize((file.size / 1024).toFixed(2));

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        setRows(results.data);
        setColumns(results.meta.fields || []);
        setLoading(false);

        console.log("Parsed Data:", results.data);
      },

      error: (err) => {
        console.error(err);
        setError("Failed to parse CSV file.");
        setLoading(false);
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10">

      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Datasets
        </h1>

        <p className="text-gray-500 mt-2">
          Upload and manage your machine learning datasets.
        </p>
      </div>

      {/* Upload */}
      <UploadZone onFileUpload={handleUpload} />

      {/* Loading */}
      {loading && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-700 font-medium">
            Parsing dataset...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 font-medium">
            {error}
          </p>
        </div>
      )}

      {/* Dataset Summary */}
      {fileName && !loading && !error && (
        <section className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold">
              Dataset Summary
            </h2>

            <p className="text-gray-500 mt-1">
              Basic information about your uploaded dataset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <DatasetInfoCard
              title="Rows"
              value={rows.length}
            />

            <DatasetInfoCard
              title="Columns"
              value={columns.length}
            />

            <DatasetInfoCard
              title="File Size"
              value={`${fileSize} KB`}
            />

            <DatasetInfoCard
              title="Dataset"
              value={
                fileName.length > 25
                  ? fileName.substring(0, 25) + "..."
                  : fileName
              }
            />

          </div>

        </section>
      )}

      {/* Dataset Preview */}
      {rows.length > 0 && !loading && !error && (
        <DatasetPreview
          rows={rows}
          columns={columns}
        />
      )}

    </div>
  );
}

export default Datasets;