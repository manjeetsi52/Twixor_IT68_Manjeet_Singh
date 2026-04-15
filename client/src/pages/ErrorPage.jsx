
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    // Handles 404, 500, etc.
    title = `${error.status} ${error.statusText}`;
    message = error.data?.message || "Page not found.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6 text-gray-300">{message}</p>

      <Link
        to="/"
        className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};