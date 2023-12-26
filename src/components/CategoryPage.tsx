import { useState } from "react";
import QuestionCard from "./QuestionCard";
import AudioInput from "./AudioInput";

const CategoryPage = ({ name }: { name: string }) => {
  // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  // console.log(apiKey);
  // const openai = new OpenAI({
  //   apiKey: apiKey,
  //   dangerouslyAllowBrowser: true,
  // });

  // async function main() {
  //   const completion = await openai.chat.completions.create({
  //     messages: [{ role: "system", content: "What is your name." }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   console.log(completion.choices[0].message.content);
  // }

  const [questionNumber, setQuestionNumber] = useState(0);
  const questions = ["question1", "question2", "question3"];

  return (
    <div className="mt-14">
      <div className="w-full text-gray-900 bg-slate-200 p-4 mt-6 rounded-lg">
      <h2 className="text-4xl ">{name}</h2>
      <QuestionCard question={questions[questionNumber]} setQuestionNumber = {setQuestionNumber} questionNumber = {questionNumber} />
      <AudioInput />

      </div>
    </div>
  );
};

export default CategoryPage;
