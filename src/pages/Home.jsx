import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import SummaryCard from "../components/SummaryCard";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";
import { useTimeline } from "../contexts/TimelineContext";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { entries } = useTimeline();

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
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Friends fetch error:", error);
        setLoading(false);
      });
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on-track").length;
  const needAttention = friends.filter(
    (friend) => friend.status === "overdue" || friend.status === "almost due"
  ).length;
  const interactionsThisMonth = entries.length;

  if (loading) return <Loader />;

  return (
    <div className="container-width py-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
          Friends to keep close in your life
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 md:text-base">
          Your personal shelf of meaningful connections. Browse, trend, and nurture
          the relationships that matter most.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1f5b49] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#174737]">
          <FaPlus />
          Add a Friend
        </button>
      </section>

      <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <SummaryCard value={totalFriends} label="Total Friends" />
        <SummaryCard value={onTrack} label="On Track" />
        <SummaryCard value={needAttention} label="Need Attention" />
        <SummaryCard value={interactionsThisMonth} label="Interactions This Month" />
      </section>

      <div className="my-10 border-t border-gray-200"></div>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">Your Friends</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;