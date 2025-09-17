export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">GanAlert</h1>
      <p className="mt-4 text-lg text-gray-600">
        Monitor kindergarten spots & avoid admissions chaos.
      </p>
      <a href="/auth" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow">
        Get Started
      </a>
    </div>
  );
}
