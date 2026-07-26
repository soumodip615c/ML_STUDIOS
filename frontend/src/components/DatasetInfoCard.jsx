function DatasetInfoCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <div
        className="mt-3 text-3xl font-bold text-blue-600 truncate"
        title={String(value)}
      >
        {value}
      </div>

    </div>
  );
}

export default DatasetInfoCard;