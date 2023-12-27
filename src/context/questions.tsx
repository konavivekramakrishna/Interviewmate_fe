import { createContext, useState, Dispatch, SetStateAction } from "react";

type Questions = string[];

type QuestionsContextType = {
  questions: Questions;
  setQuestions: Dispatch<SetStateAction<Questions>>;
};

const defaultState: QuestionsContextType = {
  questions: [],
  setQuestions: () => {},  
};

const QuestionsContext = createContext<QuestionsContextType>(defaultState);

const QuestionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<Questions>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };
