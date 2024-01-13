import "./App.css";
import { AppContainer } from "./components/AppContainer";
import AppRouter from "./router/AppRouter";
import { AnswersProvider } from "./context/answers";

import { QuestionsProvider } from "./context/questions";

function App() {
  return (
    <div>
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
