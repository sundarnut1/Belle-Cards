import Header from '@/components/Header';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="max-w-4xl mx-auto pt-20 px-4">
        <h1 className="text-5xl font-extrabold mb-6">
          Create unique-looking cards.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Generate custom cards, print, and mail them internationally with a few clicks.
        </p>
        <div className="bg-gray-100 p-8 rounded-xl border-dashed border-2 border-gray-300 text-center">
          <p className="mb-4">Start your first design here.</p>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Create New Card
          </button>
        </div>
      </main>
    </div>
  );
}
