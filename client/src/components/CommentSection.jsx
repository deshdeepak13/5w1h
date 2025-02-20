import React, { useState } from "react";
import { MessageSquare, Send, UserCircle } from "lucide-react";

const CommentSection = ({ comments = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        username: "Anonymous", // Placeholder for user, replace with actual user info if needed
        commentText: newComment,
        time: new Date().toLocaleTimeString(),
      };
      setCommentList([...commentList, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-6 w-full bg-white rounded-lg shadow-md p-4">
      {/* Comment Toggle Button */}
      <button
        onClick={toggleComments}
        className="flex items-center text-gray-600 hover:text-green-600 transition font-semibold"
      >
        <MessageSquare className="h-5 w-5 mr-2" />
        {commentList.length} Comments
      </button>

      {/* Collapsible Comment Section */}
      {isOpen && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner transition-all duration-300">
          {/* Comment Input Box */}
          <div className="flex items-center space-x-2 border-b pb-3">
            <input
              type="text"
              className="w-full p-2 text-sm border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>

          {/* List of Comments */}
          <div className="mt-3 max-h-52 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {commentList.length > 0 ? (
              commentList.map((comment, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  {/* User Avatar (Replace with actual image if needed) */}
                  <UserCircle className="h-8 w-8 text-gray-400" />
                  
                  {/* Comment Content */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{comment.username}</p>
                    <p className="text-sm text-gray-600">{comment.commentText}</p>
                    <p className="text-xs text-gray-400">{comment.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic text-center">No comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
