import "./App.css";
import { AppContainer } from "./components/AppContainer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </div>
  );
}

export default App;
