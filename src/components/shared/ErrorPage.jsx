import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-4xl font-bold mb-3">Oops!</h1>
      <p>Sorry, an unexpected error has occurred...</p>
      <Link
        to="/"
        className="text-blue-500 mt-2 duration-300  border-b-2  border-transparent hover:border-blue-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
