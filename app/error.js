'use client';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-6">THis is to test if error handling works. Keep Clicking to others and come back It will fix itself</p>
        <a
          href="/"
          className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Go back to the homepage & Try Another and wait few Seconds it will Work
        </a>
      </div>
    </div>
  );
}