const SummaryCard = ({ value, label }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white py-6 text-center shadow-sm">
      <h3 className="text-3xl font-bold text-[#1f5b49]">{value}</h3>
      <p className="mt-2 text-sm text-gray-500">{label}</p>
    </div>
  );
};

export default SummaryCard;