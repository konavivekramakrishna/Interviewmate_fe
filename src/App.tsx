import "./App.css";
import { AppContainer } from "./components/AppContainer";
import AppRouter from "./router/AppRouter";
import { AnswersProvider } from "./context/answers";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <AnswersProvider>
        <AppContainer>
          <AppRouter />
        </AppContainer>
      </AnswersProvider>
    </div>
  );
}

export default App;
