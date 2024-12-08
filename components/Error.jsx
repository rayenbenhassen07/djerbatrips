import Link from "next/link";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-main4 mb-4">404</h1>
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <div className="px-6 py-3 bg-main4 text-white font-semibold rounded-md shadow-md hover:bg-main3 transition-colors duration-300">
          Go Back Home
        </div>
      </Link>
    </div>
  );
};

export default Error404;
