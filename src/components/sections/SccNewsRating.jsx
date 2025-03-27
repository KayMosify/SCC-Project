import React from "react";
import NewsImage from "../../assets/scc-cardImg.jpeg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title:
      "Vitae magnis proin rutrum, condimentum eros pellentesque. Leo. habitasse facilisi condimentum...",
    date: "28th February, 2025",
    tag: "News",
    image: NewsImage,
  },
  {
    id: 2,
    title:
      "Vitae magnis proin rutrum, condimentum eros pellentesque. Leo. habitasse facilisi condimentum...",
    date: "28th February, 2025",
    tag: "News",
    image: NewsImage,
  },
  {
    id: 3,
    title:
      "Vitae magnis proin rutrum, condimentum eros pellentesque. Leo. habitasse facilisi condimentum...",
    date: "28th February, 2025",
    tag: "News",
    image: NewsImage,
  },
];

const SccNewsRatings = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Thumbs Up/Down */}
      <div className="flex justify-center gap-12 mb-8 text-3xl text-blue-600">
        <FaThumbsUp color="blue" size={40}/>
        <FaThumbsDown color="blue" size={40}/>
      </div>

      {/* Post Type Label */}
      <div className="text-center mb-6">
        <p className="uppercase text-sm tracking-wide text-gray-500">
          Posted in{" "}
          <span className="text-red font-semibold">Press Release</span>
        </p>
      </div>

      {/* Latest News Section */}
      <div>
        <h2 className="text-sm font-semibold uppercase text-red mb-4">
          Latest News
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="border rounded-md shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red text-white text-xs font-bold px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm font-semibold">{item.title}</p>
                <a
                  href="#"
                  className="text-sm text-red font-medium flex items-center gap-1"
                >
                  Read more <span>→</span>
                </a>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SccNewsRatings;
