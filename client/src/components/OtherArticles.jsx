import React from "react";

const otherArticles = [
  {
    title: "Political Debate Heats Up",
    event: "World Summit 2025",
    publishDate: "Feb 15, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Science Breakthrough",
    event: "Global Science Forum",
    publishDate: "Feb 12, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Political Debate Heats Up",
    event: "World Summit 2025",
    publishDate: "Feb 15, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Science Breakthrough",
    event: "Global Science Forum",
    publishDate: "Feb 12, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Political Debate Heats Up",
    event: "World Summit 2025",
    publishDate: "Feb 15, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Science Breakthrough",
    event: "Global Science Forum",
    publishDate: "Feb 12, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Political Debate Heats Up",
    event: "World Summit 2025",
    publishDate: "Feb 15, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Science Breakthrough",
    event: "Global Science Forum",
    publishDate: "Feb 12, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Political Debate Heats Up",
    event: "World Summit 2025",
    publishDate: "Feb 15, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
  {
    title: "Science Breakthrough",
    event: "Global Science Forum",
    publishDate: "Feb 12, 2025",
    image:
      "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid",
  },
];

const OtherArticles = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {otherArticles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-3 w-64"
        >
          <img
            className="w-full h-36 object-cover rounded-md"
            src={article.image}
            alt={article.title}
          />
          <h3 className="mt-2 text-md font-semibold text-gray-800">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500">{article.event}</p>
          <p className="text-xs text-gray-400">{article.publishDate}</p>
        </div>
      ))}
    </div>
  );
};

export default OtherArticles;
