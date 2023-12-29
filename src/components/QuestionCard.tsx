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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-gray-800 m-2 font-custom text-xl">{question}</div>
      <div className="flex items-center">
        <AudioInput
          index={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
        {questionNumber < 2 && (
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold font-custom py-2 px-4 ml-4 rounded-lg border-2 hover:border-gray-100 shadow-sm shadow-black"
            onClick={() => {
              setQuestionNumber(questionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
  
};

export default QuestionCard;
