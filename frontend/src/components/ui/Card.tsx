import React from 'react';
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
// Define the CardProps interface
interface CardProps {
  logo: React.ReactNode; // Logo can be any React element (e.g., image or icon)
  title: string; // Title of the card
  onShare: () => void; // Function to handle share action
  onDelete: () => void; // Function to handle delete action
  mainContent: React.ReactNode; // Main content (text, image, etc.)
  tags: string[]; // Array of tags
  date: string; // Creation date
}

function Card(props: CardProps) {
  return (
    <div className="border shadow-md rounded-lg p-4 bg-white h-full">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8">{props.logo}</div>
          <h2 className="text-lg font-bold">{props.title}</h2>
        </div>
        <div className="flex items-center space-x-4 ">
          <button onClick={props.onShare} className="text-blue-500 hover:underline">
            <IoShareSocialOutline />
          </button>
          <button onClick={props.onDelete} className="text-red-500 hover:underline">
            <AiOutlineDelete/>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-4 p-2">{props.mainContent}</div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1  text-[12px] rounded-md text-indigo-600 bg-indigo-50"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Date */}
      <div className="text-right text-sm text-gray-500">{props.date}</div>
    </div>
  );
}

export default Card;
