import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiArchive, FiClock, FiDelete, FiEdit } from "react-icons/fi";
import toast from "react-hot-toast";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { useTimeline } from "../contexts/TimelineContext";

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

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addTimelineEntry } = useTimeline();

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}friends.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setFriend(found || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Friend details fetch error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleInteraction = (type) => {
    if (!friend) return;
    addTimelineEntry(type, friend.name);
    toast.success(`${type} added to timeline!`);
  };

  if (loading) {
    return <div className="container-width py-16">Loading...</div>;
  }

  if (!friend) {
    return <div className="container-width py-16">Friend not found.</div>;
  }

  return (
    <div className="container-width py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />

            <h2 className="mt-4 text-xl font-semibold text-gray-800">{friend.name}</h2>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold capitalize ${statusClasses[friend.status]}`}
            >
              {friend.status}
            </span>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${tagColors[index % tagColors.length]}`}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm italic text-gray-500">"{friend.bio}"</p>
            <p className="mt-2 text-xs text-gray-400">Preferred: email</p>
            <p className="mt-1 text-xs text-gray-400">{friend.email}</p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-2.5 text-sm hover:bg-gray-50">
            <FiClock />
            Snooze 2 Weeks
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-2.5 text-sm hover:bg-gray-50">
            <FiArchive />
            Archive
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white py-2.5 text-sm text-red-500 hover:bg-red-50">
            <FiDelete />
            Delete
          </button>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1f5b49]">
                {friend.days_since_contact}
              </h3>
              <p className="mt-1 text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1f5b49]">{friend.goal}</h3>
              <p className="mt-1 text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-[#1f5b49]">{friend.next_due_date}</h3>
              <p className="mt-1 text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#1f5b49]">Relationship Goal</h3>
              <button className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-xs text-gray-500 hover:bg-gray-50">
                <FiEdit />
                Edit
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Connect every <span className="font-semibold text-gray-800">{friend.goal} days</span>
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold text-[#1f5b49]">Quick Check-In</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <button
                onClick={() => handleInteraction("Call")}
                className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 py-5 hover:bg-gray-50"
              >
                <img src={callIcon} alt="Call" className="h-6 w-6 object-contain" />
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleInteraction("Text")}
                className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 py-5 hover:bg-gray-50"
              >
                <img src={textIcon} alt="Text" className="h-6 w-6 object-contain" />
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleInteraction("Video")}
                className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 py-5 hover:bg-gray-50"
              >
                <img src={videoIcon} alt="Video" className="h-6 w-6 object-contain" />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;