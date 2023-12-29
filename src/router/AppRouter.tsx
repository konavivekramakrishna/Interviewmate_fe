import { useRoutes } from "raviger";
import CategoryPage from "../components/CategoryPage";
import Home from "../components/Home";
import Results from "../components/Results";

export default function AppRouter() {
  const routes = {
    "/": () => <Home />,
    "/category/:name": ({ name }: { name: string }) => (
      <CategoryPage key={name} name={name} />
    ),
    "/results" : () => <Results/>,
  };
  let routeResult = useRoutes(routes);
  return routeResult;
}
