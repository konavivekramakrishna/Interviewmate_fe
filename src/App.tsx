import "./App.css";
import { AppContainer } from "./components/AppContainer";
import AppRouter from "./router/AppRouter";
import { AnswersProvider } from "./context/answers";

import { QuestionsProvider } from "./context/questions";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <QuestionsProvider>
        <AnswersProvider>
          <AppContainer>
            <AppRouter />
          </AppContainer>
        </AnswersProvider>
      </QuestionsProvider>
    </div>
  );
}

export default App;
