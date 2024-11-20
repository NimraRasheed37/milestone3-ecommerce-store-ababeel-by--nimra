'use client';

import Link from "next/link";

export default function BooksCards() {
  const books = [
    {
      title: 'Harry Potter and the Sorcerers Stone',
      author: 'J.K. Rowling',
      image: '/img/books/hp-1.jpg',
      price: '1000 PKR',
      category: "English",
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: '/img/books/hobbit.jpg',
      price: '1200 PKR',
      category: "English",
    },
    {
      title: 'Namal',
      author: 'Nemrah Ahmed',
      image: '/img/books/namal.jpeg',
      price: '2500 PKR',
      category: "Urdu",
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      image: '/img/books/hunger.jpg',
      price: '800 PKR',
      category: "English",
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      image: '/img/books/p&p.jpg',
      price: '550 PKR',
      category: "English",
    },
    {
      title: 'Aks',
      author: 'Umerah Ahmed',
      image: '/img/books/aks.jpg',
      price: '900 PKR',
      category: "Urdu",
    },
    {
      title: 'Raja Gidh',
      author: 'Banu Qudsia',
      image: '/img/books/raja-gidh.png',
      price: '1200 PKR',
      category: "Urdu",
    },
    {
      title: 'Main Anmol',
      author: 'Nemrah Ahmed',
      image: '/img/books/anmol.jpg',
      price: '2000 PKR',
      category: "Urdu",
    },
  ];

  return (
    <div className="p-8 lg:mx-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Popular Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-red-900 shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-900">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-4">by {book.author}</p>
              <p className="text-md text-gray-800 font-bold mt-6 mb-4">Price : {book.price}</p>
              <div className="flex justify-between">
                <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600">
                  View
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/books"
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 hover:shadow-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
