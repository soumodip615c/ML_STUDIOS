import { UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";

function UploadZone({ onFileUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,

    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-12 text-center hover:border-blue-600 cursor-pointer transition"
    >
      <input {...getInputProps()} />

      <UploadCloud size={60} className="mx-auto text-blue-600" />

      <h2 className="text-2xl font-semibold mt-5">
        Upload Dataset
      </h2>

      <p className="text-gray-500 mt-2">
        Drag & Drop your CSV here
      </p>

      <p className="my-3 text-gray-400">OR</p>

      <button
        type="button"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Browse CSV
      </button>
    </div>
  );
}

export default UploadZone;