import { createContext, useState, Dispatch, SetStateAction } from "react";

type Answers = string[];  
type AnswersContextType = {
  answers: Answers;
  setAnswers: Dispatch<SetStateAction<Answers>>;
};

const defaultState: AnswersContextType = {
  answers: [],
  setAnswers: () => {},  
};

const AnswersContext = createContext<AnswersContextType>(defaultState);

const AnswersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [answers, setAnswers] = useState<Answers>([]);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};

export { AnswersContext, AnswersProvider };
