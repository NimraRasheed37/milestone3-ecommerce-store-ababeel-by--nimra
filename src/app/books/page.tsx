'use client';

import { useEffect, useState } from "react";

import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function shuffleArray(array:any) {
  return array.sort(() => Math.random() - 0.5);
}

export default function Books() {
  const books = [
    {
      title: 'Harry Potter and the Sorcerers Stone',
      author: 'J.K.Rowling',
      image: 'https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp',
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

    {
        title: 'Alchemist',
        author: 'Paulo Coelho',
        image: 'https://junealholder.blog/wp-content/uploads/2019/05/img_20190505_155026_731.jpg',
        price: '400 PKR',
        category: "English",
      },
      {
        title: 'Khud se khuda tak',
        author: 'Muhammad nasir iftikhar',
        image: 'https://booksvilla.com.pk/cdn/shop/products/kodsykodatk_900x.jpg?v=1621626541',
        price: '2100 PKR',
        category: "Urdu",
      },
      {
        title: 'Harry potter and the chamber of secrets',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/6VuPUG4wPtmg3xvqwm6ZSn/2465365bae53ac09562f7bcea0b75cb3/English_Harry_Potter_2_Epub_9781781100226.jpg?w=914&q=70&fm=webp',
        price: '1000 PKR',
        category: "English",
      },
      {
        title: 'Harry potter and the prisoner of azkaban',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=webp',
        price: '1000 PKR',
        category: "English",
      },
      {
        title: 'Harry potter and the goblet of fire',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=webp',
        price: '1000 PKR',
        category: "English",
      },
      {
        title: 'Harry potter and the order of phoneix',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/29op5HEVpvrKK2JKYCsFiO/5b939002fe3611b3f77659df83a76551/English_Harry_Potter_5_Epub_9781781100240.jpg?w=914&q=70&fm=webp',
        price: '1100 PKR',
        category: "English",
      },
      {
        title: 'Harry potter and the half blood prince',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=webp',
        price: '2000 PKR',
        category: "English",
      },
      {
        title: 'Harry potter and the deathly hallows',
        author: 'J.K.Rowling',
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=webp',
        price: '1500 PKR',
        category: "English",
      },
    
  ];

  const [shuffledBooks, setShuffledBooks] = useState(books);

  // Shuffle books only on the client side
  useEffect(() => {
    setShuffledBooks(shuffleArray([...books]));
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <Categories />

      <div className="p-8 lg:mx-4 xl:mx-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Popular Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {shuffledBooks.map((book:any, index:any) => (
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
                <p className="text-md text-gray-800 font-bold mt-6 mb-4">Price: {book.price}</p>
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
      </div>
    </>
  );
}
