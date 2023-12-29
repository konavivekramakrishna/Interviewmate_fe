import { navigate } from "raviger";
import { useContext, useState } from "react";
import { AnswersContext } from "../context/answers";
import { QuestionsContext } from "../context/questions";
import OpenAI from "openai";
import LoadingSpinner from "./LoadingSpinner";

const Results = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);
  const { answers, setAnswers } = useContext(AnswersContext);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");

  const evaluateAnswers = async ({ prompt }: { prompt: string }) => {
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
            content: prompt,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const rating = completion.choices[0].message.content;
      console.log(rating);
      return rating;
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  async function handleSubmit() {
    answers.forEach((answer) => {
      console.log("answer: " + answer);
    });
    let prompt =
      'You are an expert at interviews. I have given questions and answers for an interview. Your task is to evaluate the answers and rate the interviewee on a scale of 1 to 100. Do not generate anything in the response except the rating. Do not  acknowledge that you have generated the response. The response you generate must be in this form "Rating: [your rating]".';
    for (let i = 0; i < questions.length; i++) {
      prompt += `Q: ${questions[i]}\nA: ${answers[i]}\n\n`;
    }
    console.log("prompt: " + prompt);
    const results = await evaluateAnswers({ prompt });
    console.log("results: " + results);
    setResults(results || "");
    setQuestions([]);
    setAnswers([]);
  }

  return (
    <div>
      {loading ? (
        <div className="justify-center items-center mt-14">
          <LoadingSpinner />
        </div>
      ) : results === "" ? (
        <div
          className={
            "cursor-pointer p-2 mt-14 rounded-md bg-slate-300 w-[400px] text-center"
          }
        >
          <div className="flex flex-col text-gray-800 m-2 text-xl">
            Submitted Successfully!!
          </div>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 m-4 rounded-lg border-2 hover:border-gray-100 shadow-sm shadow-black"
            onClick={() => {
              handleSubmit();
            }}
          >
            Show Results
          </button>
        </div>
      ) : (
        <div
          className={
            "cursor-pointer p-2 mt-14 rounded-md bg-slate-300 w-[400px] text-center"
          }
        >
          <div className="flex flex-col text-gray-800 m-2 text-xl">
            {results}
          </div>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 m-4 rounded-lg border-2 hover:border-gray-100 shadow-sm shadow-black"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;
