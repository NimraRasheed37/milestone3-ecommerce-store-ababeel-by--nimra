'use client';

export default function Genre() {
  const categories = [
    {
      title: 'Fiction',
      image: '/img/categories/fiction.png',
      description: 'Explore worlds of imagination and creativity.',
    },
    {
      title: 'Science',
      image: '/img/categories/science.avif',
      description: 'Dive into the wonders of the universe.',
    },
    {
      title: 'History',
      image: '/img/categories/history.avif',
      description: 'Relive the stories of the past.',
    },
    {
      title: 'Adventures',
      image: '/img/categories/adventure.avif',
      description: 'Get inspired by the lives of great people.',
    },
    {
      title: 'Fantasy',
      image: '/img/categories/fantasy.avif',
      description: 'Uncover magical realms and adventures.',
    },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Book Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-60 bg-white rounded-lg shadow-red-800 shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
