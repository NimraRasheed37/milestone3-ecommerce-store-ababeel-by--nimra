export default function Categories() {
    const categories = [
      "Urdu",
      "English",
      "Islamic",
      "Children",
      "Coloring",
      "Puzzle",
      "CSS",
      "Tech",
    ];
  
    return (
      <div className="p-8 lg:mx-4 xl:mx-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
        Categories
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer text-sm md:text-lg bg-red-600 text-white text-center  py-2 rounded-3xl shadow-red-900 font-semibold hover:font-extrabold shadow-md hover:bg-red-700 transition-colors duration-300"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    );
  }
  