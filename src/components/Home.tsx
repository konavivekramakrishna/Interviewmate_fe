import Categories from "./Categories";
import Foot from "./Footer";
import Intro  from "./Intro";


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
    <div className="w-full">
      <Intro/>
      <div className="flex flex-col gap-2 justify-center items-center mt-6">
        <div className="text-3xl font-bold font-custom mt-6 ">
          Choose the field you want to practice
        </div>
        <Categories categoryList={categoryList} />
      </div>
      <Foot />
    </div>
  );
}
