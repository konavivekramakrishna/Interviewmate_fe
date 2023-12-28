import { useState, useContext, useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AnswersContext } from "../context/answers";

interface Props {
  index: number;

  setQuestionNumber: (number: number) => void;
}

const AudioInput = (props: Props) => {
  const { answers, setAnswers } = useContext(AnswersContext);
  const [isRecording, setIsRecording] = useState(false);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const stopListening = useCallback(() => {
    SpeechRecognition.stopListening();
    setAnswers((currentAnswers) => [...currentAnswers, transcript]);
    resetTranscript();
    setIsRecording(false);
    console.log("ans", answers);
    console.log("ind", props.index);

    if (props.index == 2) {
      props.setQuestionNumber(props.index + 1);

      // submit logic here
    } else {
      props.setQuestionNumber(props.index + 1);
    }
  }, [setAnswers, transcript, resetTranscript]);

  const startListening = useCallback(() => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsRecording(true);
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <>
      <div className="container">
        <div className="main-content">{transcript}</div>
        <button
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 mx-4 my-6 rounded-lg"
          onClick={isRecording ? stopListening : startListening}
        >
          {isRecording
            ? props.index == 2
              ? "Submit"
              : "Stop Recording"
            : "Start Recording"}
        </button>
      </div>
    </>
  );
};

export default AudioInput;
