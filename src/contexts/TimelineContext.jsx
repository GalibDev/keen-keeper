import { createContext, useContext, useEffect, useMemo, useState } from "react";

const TimelineContext = createContext();

const starterEntries = [
  {
    id: 101,
    type: "Meetup",
    title: "Meetup with Tom Baker",
    date: "March 29, 2026",
  },
  {
    id: 102,
    type: "Text",
    title: "Text with Sarah Chen",
    date: "March 28, 2026",
  },
  {
    id: 103,
    type: "Meetup",
    title: "Meetup with Olivia Martinez",
    date: "March 26, 2026",
  },
  {
    id: 104,
    type: "Video",
    title: "Video with Aisha Patel",
    date: "March 23, 2026",
  },
  {
    id: 105,
    type: "Meetup",
    title: "Meetup with Sarah Chen",
    date: "March 21, 2026",
  },
  {
    id: 106,
    type: "Call",
    title: "Call with Marcus Johnson",
    date: "March 19, 2026",
  },
  {
    id: 107,
    type: "Meetup",
    title: "Meetup with Aisha Patel",
    date: "March 17, 2026",
  },
  {
    id: 108,
    type: "Text",
    title: "Text with Olivia Martinez",
    date: "March 13, 2026",
  },
  {
    id: 109,
    type: "Call",
    title: "Call with Lisa Nakamura",
    date: "March 11, 2026",
  },
  {
    id: 110,
    type: "Call",
    title: "Call with Sarah Chen",
    date: "March 11, 2026",
  },
  {
    id: 111,
    type: "Video",
    title: "Video with Marcus Johnson",
    date: "March 6, 2026",
  },
  {
    id: 112,
    type: "Video",
    title: "Video with Ryan O'Brien",
    date: "February 24, 2026",
  },
];

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("keenkeeper-timeline")) || [];
    setEntries([...saved, ...starterEntries]);
  }, []);

  const addTimelineEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    const saved = JSON.parse(localStorage.getItem("keenkeeper-timeline")) || [];
    const updated = [newEntry, ...saved];
    localStorage.setItem("keenkeeper-timeline", JSON.stringify(updated));
    setEntries([...updated, ...starterEntries]);
  };

  const value = useMemo(() => ({ entries, addTimelineEntry }), [entries]);

  return (
    <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);