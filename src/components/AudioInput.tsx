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
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>
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
          <button className="bg-blue-500 m-4" onClick={startListening}>
            Start Listening
          </button>
          <button
            className="bg-red-500 m-4"
            onClick={SpeechRecognition.stopListening}
          >
            Stop Listening
          </button>
          <button className="bg-green-500 m-4" onClick={printTranscript}>
            Print Transcript
          </button>
          <button className="bg-green-500 m-4" onClick={printAnswers}>
            Print Answers
          </button>
        </div>
      </div>
    </>
  );
};

export default AudioInput;
