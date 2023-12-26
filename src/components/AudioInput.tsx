import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { AnswersContext } from "../context/answers";

const AudioInput = () => {
  const { answers, setAnswers } = React.useContext(AnswersContext);
  const [textToCopy, setTextToCopy] = React.useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const printTranscript = () => {
    setAnswers((currentAnswers) => [...currentAnswers, transcript]);
  };

  const printAnswers = () => {
    setAnswers([...answers, transcript]);
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  return (
    <>
      <div className="container">
        <div
          className="main-content"
          onClick={() => {
            setTextToCopy(transcript);
          }}
        >
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
            onClick={startListening}
          >
            Start Listening
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
            onClick={SpeechRecognition.stopListening}
          >
            Stop Listening
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
            onClick={printTranscript}
          >
            Print Transcript
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
            onClick={printAnswers}
          >
            Print Answers
          </button>
        </div>
      </div>
    </>
  );
};

export default AudioInput;
