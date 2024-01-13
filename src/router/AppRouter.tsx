import { useRoutes } from "raviger";
import CategoryPage from "../components/CategoryPage";
import Home from "../components/Home";
import Results from "../components/Results";
import Notfound from "../components/NotFound";
import About from "../components/About";

export default function AppRouter() {
  const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/category/:name": ({ name }: { name: string }) => (
      <CategoryPage key={name} name={name} />
    ),
    "/results" : () => <Results/>,
    "*" : () => <Notfound/>,
  };
  let routeResult = useRoutes(routes);
  return routeResult;
}
