// import React from 'react';
// import Category from './Category';

// const Categories = ({ categoryList }: { categoryList: string[] }) => {
//   return (
//     <div className="flex flex-wrap gap-2">
//       {categoryList.map((category, index) => (
//         <Category key={index} name={category} />
//       ))}
//     </div>
//   );
// };

// export default Categories;

// Categories.js
import React from 'react';
import Category from './Category';

const Categories = ({ categoryList }: { categoryList: string[] }) => {
  const rows = [];
  for (let i = 0; i < categoryList.length; i += 2) {
    const categoryRow = (
      <div key={i} className="flex justify-around m-2">
        {categoryList[i] && <Category name={categoryList[i]} />}
        {categoryList[i + 1] && <Category name={categoryList[i + 1]} />}
      </div>
    );
    rows.push(categoryRow);
  }

  return <div>{rows}</div>;
};

export default Categories;
