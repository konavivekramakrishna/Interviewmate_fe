import React, { useState } from 'react';

const Category = ({ name }: { name: string }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    // Add your logic here for handling the category selection
  };

  return (
    <div
      className={`cursor-pointer p-2 m-2 rounded-md ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default Category;
