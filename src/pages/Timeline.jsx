import { useMemo, useState } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { useTimeline } from "../contexts/TimelineContext";

const iconMap = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
  Meetup: "🤝",
};

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const { entries } = useTimeline();

  const filteredEntries = useMemo(() => {
    if (filter === "All") return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  return (
    <div className="container-width py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Timeline</h1>

        <div className="mt-5">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-[210px] rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500 outline-none"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 rounded-md border border-gray-200 bg-white px-4 py-4 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                {typeof iconMap[entry.type] === "string" && iconMap[entry.type] === "🤝" ? (
                  <span className="text-lg">🤝</span>
                ) : (
                  <img
                    src={iconMap[entry.type]}
                    alt={entry.type}
                    className="h-5 w-5 object-contain"
                  />
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700">{entry.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{entry.date}</p>
              </div>
            </div>
          ))}

          {filteredEntries.length === 0 && (
            <div className="rounded-md border border-dashed border-gray-300 bg-white px-4 py-10 text-center text-sm text-gray-400">
              No timeline entries found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;