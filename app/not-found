export default function NotFound() {
  return (
    <>
      <style>
        {`
          .gradient-text {
            background-image: linear-gradient(to right, #4f46e5, #ec4899);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>

      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Main 404 heading with gradient effect */}
        <h1 className="text-8xl md:text-9xl font-extrabold gradient-text mb-4 animate-pulse">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>

        {/* Descriptive paragraph */}
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t seem to exist. It
          might have been moved, deleted, or you may have mistyped the URL.
        </p>

        {/* Home button link using a standard anchor tag for compatibility. */}
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Return to Homepage
        </a>
      </div>
    </>
  );
}
