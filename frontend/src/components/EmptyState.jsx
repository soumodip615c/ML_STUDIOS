function EmptyState({ message }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-10 text-center">

      <h2 className="text-xl font-semibold text-gray-700">
        Nothing Here Yet
      </h2>

      <p className="text-gray-500 mt-3">
        {message}
      </p>

    </div>
  );
}

export default EmptyState;