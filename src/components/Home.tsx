import Categories from "./Categories";

const categoryList = [
  "Machine Learning",
  "Full Stack Development",
  "Software Engineering",
  "System Design",
  "UX Design",
  "Data Science",
  "Mobile App Development",
  "Cybersecurity",
  "Cloud Computing",
  "Product Management",
];

export default function Home() {
  return (
    <div className=" bg-white rounded-xl">
      <div className="flex-col flex justify-center items-center mt-10">
        <h1 className="text-3xl font-bold underline mb-5">Select a category</h1>
        <Categories categoryList={categoryList} />
      </div>
    </div>
  );
}
