function ActionCard({ title, description, buttonText }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

      <button
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        {buttonText}
      </button>

    </div>
  );
}

export default ActionCard;