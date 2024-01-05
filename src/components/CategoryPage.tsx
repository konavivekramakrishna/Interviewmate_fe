import { useContext, useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { QuestionsContext } from "../context/questions";
import OpenAI from "openai";
import LoadingSpinner from "./LoadingSpinner";

const CategoryPage = ({ name }: { name: string }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      });

      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `You are an expert in taking interviews for students and professionals. Generate 3 questions you would ask in an interview for${name} domain. The question must be easy level. The questions must be suitable for technical interview and should be more specific about the domain related buzz words Instead of numbering the questions use bullet points. No other text must be generated except the questions. Make sure that you do not overdo the question and be specific to one line only.  Do not acknowledge that you have generated the questions.`,
            },
          ],
          model: "gpt-3.5-turbo",
        });

        const questionsContent = completion.choices[0].message.content;
        const array = questionsContent ? questionsContent.split("\n") : [];
        setQuestions(array);

        console.log("Questions:", array);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [name]);

  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className="mt-14">
      {loading ? (
        <div className="justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="w-[800px] text-gray-900 bg-slate-300 p-4 mt-6 rounded-lg">
          <h2 className="text-4xl ">{name}</h2>
          <QuestionCard
            question={questions[questionNumber]}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
