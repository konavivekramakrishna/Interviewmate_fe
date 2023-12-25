import { navigate } from "raviger";

const Category = ({ name }: { name: string }) => {
  const handleClick = () => {
    navigate(`/category/${name}`);
  };

  return (
    <div
      className={"cursor-pointer p-2 m-2 rounded-md bg-slate-500 hover:bg-slate-700 hover:text-gray-100 w-80 text-center"}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default Category;
