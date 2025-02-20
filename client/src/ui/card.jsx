import React from "react";
import { ThumbsUp, ThumbsDown, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition-transform hover:scale-101 hover:shadow-xl duration-300 my-4 w-[90%]">
    {children}
  </div>
);

const CardContent = ({ 
  imageUrl, 
  title, 
  excerpt, 
  content,  
  category, 
  eventName, 
  publishedAgo, 
  likes, 
  dislikes, 
  comments,
  articleLink // Link to full article
}) => (
  <div className="p-5">
    <div className="flex justify-between items-end pb-2">
    {/* Title */}
    <h2 className="text-lg md:text-3xl font-bold text-gray-900 mt-4 hover:text-gray-700 transition-colors cursor-pointer">
      {title}
    </h2>

    {/* Event Name */}
    {eventName && <p className="text-sm text-gray-500 font-medium mt-1">{eventName}</p>}
    </div>

    {/* Article Image */}
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
      <img
        src={imageUrl || "https://img.freepik.com/free-photo/people_1122-1878.jpg?ga=GA1.1.726864022.1739873088&semt=ais_hybrid"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
      />
      {/* Category Badge */}
      <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {category}
      </span>
    </div>

    

    

    {/* Excerpt / Content Display */}
    {content ? (
      <p className="text-gray-800 mt-3 text-md leading-relaxed ">{content}</p>
    ) : (
      <div className="text-gray-800 mt-3 text-md leading-relaxed space-y-1">
        <p><strong>Who:</strong> {excerpt?.Who}</p>
        <p><strong>Where:</strong> {excerpt?.Where}</p>
        <p><strong>What:</strong> {excerpt?.What}</p>
        <p><strong>How:</strong> {excerpt?.How}</p>
        <p><strong>Implication:</strong> {excerpt?.Implication}</p>
        <p><strong>Context:</strong> {excerpt?.Context}</p>
      </div>
    )}

    {/* Article Meta Data */}
    <div className="flex items-center justify-between text-sm text-gray-500 mt-5">
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600 transition">
          <ThumbsUp className="h-5 w-5 mr-1" /> {likes}
        </button>
        <button className="flex items-center text-gray-600 hover:text-red-600 transition">
          <ThumbsDown className="h-5 w-5 mr-1" /> {dislikes}
        </button>
        {/* Published Date */}
    <div className="text-xs text-gray-500 flex items-center mt-1">
      <Clock className="h-4 w-4 mr-1" /> {publishedAgo}
    </div>
      </div>
        

      {/* Read Full Story Link */}
      {articleLink && (
        <Link to={articleLink} className="text-blue-600 hover:underline flex items-center">
          Read full story <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      )}
    </div>
      <div className="flex items-center text-gray-600 hover:text-green-600 transition w-full">
          {/* <MessageSquare className="h-5 w-5 mr-1" /> {comments} */}
          <CommentSection comments={comments} />
        </div>
  </div>
);

export { Card, CardContent };
