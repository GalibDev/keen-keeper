import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-width flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[#1f5b49]">404</h1>
      <p className="mt-4 text-lg text-gray-600">Page not found</p>
      <Link to="/" className="mt-6 rounded-md bg-[#1f5b49] px-5 py-3 text-white">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;