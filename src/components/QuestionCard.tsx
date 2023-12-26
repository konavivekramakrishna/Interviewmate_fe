import AudioInput from "./AudioInput";

const QuestionCard = ({
  question,
  setQuestionNumber,
  questionNumber,
}: {
  question: string;
  setQuestionNumber: (number: number) => void;
  questionNumber: number;
}) => {
  function handleSubmit() {
    console.log("submit");
  }


  return (
    <div>
      <div className="flex flex-col text-gray-800 m-2 text-xl">
        {questionNumber + 1} . {question}
      </div>
      {questionNumber === 2 ? (
        <button
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
          onClick={() => {
            setQuestionNumber(questionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
