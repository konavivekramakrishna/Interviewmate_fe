import Categories from "./Categories";

const categoryList = [
  "Machine Learning",
  "Full Stack Development",
  "Software Engineering",
  "System Design",
  "UX Design",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
];

export default function Home() {
  return (
      <div className="flex flex-col gap-2 justify-center items-center mt-6">
        <div className="text-3xl font-bold underline">
          Select a category
        </div>
          <Categories categoryList={categoryList} />
      </div>
  );
}
