import React, { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const CreateImage = ({ handleImage, images }) => {
  const [icon, setIcon] = useState({});

  const handleIcon = (id) => {
    const newSize = icon[id] ? icon[id] + 10 : 20;
    setIcon({ ...icon, [id]: newSize });
  };

  return (
    <div className="flex flex-col items-center">
    <button 
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-4 mt-8" 
      onClick={handleImage}
    >
      Get Images
    </button>
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <div key={image.id} className="text-center ">
          <img 
            src={image.img} 
            alt="Random" 
            onClick={() => handleIcon(image.id)} 
            className="cursor-pointer rounded-xl"
          />
          <FaRegCheckCircle 
            style={{ fontSize: icon[image.id] || 20, color: icon[image.id] ? 'blue' : 'initial' }} 
            className="mt-2" 
          />
        </div>
      ))}
    </div>
  </div>
);
};
export default CreateImage;
