import { Link } from "react-router-dom";

const statusClasses = {
  overdue: "bg-red-100 text-red-500",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-700",
};

const tagColors = [
  "bg-green-100 text-green-700",
  "bg-emerald-100 text-emerald-700",
  "bg-lime-100 text-lime-700",
  "bg-teal-100 text-teal-700",
];

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-16 w-16 rounded-full object-cover"
      />

      <h3 className="mt-4 text-base font-semibold text-gray-800">{friend.name}</h3>
      <p className="mt-1 text-[11px] text-gray-400">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${tagColors[index % tagColors.length]}`}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-semibold capitalize ${statusClasses[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;