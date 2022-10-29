import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Questions from "./components/Questions/Questions";
import Quizes from "./components/Quizes/Quizes";
import Stats from "./components/Stats/Stats";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/quizes",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Quizes></Quizes>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Questions></Questions>,
        },
        {
          path: "/stats",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Stats></Stats>,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);

  return( 
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>);
}

export default App;
