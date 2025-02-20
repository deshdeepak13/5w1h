import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const topEvents = [
  { title: "Global Warming Effects", image: "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid" },
  { title: "AI in Healthcare", image: "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid" },
  { title: "New Space Discovery", image: "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid" },
  { title: "New Virus Arrived", image: "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid" }
];

const TopEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? topEvents.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === topEvents.length - 1 ? 0 : prev + 1));

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {topEvents.map((event, index) => (
          <div key={index} className="min-w-full relative">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg " />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-2xl font-bold">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition">
        <ChevronLeft size={28} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition">
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {topEvents.map((_, index) => (
          <div key={index} className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-4" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
};

export default TopEvents;
