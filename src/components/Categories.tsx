import Category from "./Category";

const Categories = ({ categoryList }: { categoryList: string[] }) => {
  return (
    <div className="flex justify-center m-4 h-screen">
      <div className="flex flex-col items-center">
        {categoryList.map((category, index) => (
          <div key={index} className="mb-2">
            <Category name={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
