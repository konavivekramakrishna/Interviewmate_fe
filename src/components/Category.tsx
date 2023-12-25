import { navigate } from "raviger";

const Category = ({ name }: { name: string }) => {
  const handleClick = () => {
    navigate(`/category/${name}`);
  };

  return (
    <div
      className={`cursor-pointer p-2 m-2 rounded-md bg-slate-400 hover:bg-slate-200 w-80 text-center`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default Category;
