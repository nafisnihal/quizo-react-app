import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";
import Quizes from "./components/Quizes/Quizes";
import Stats from "./components/Stats/Stats";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/quizes',
        loader: async() =>{
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Quizes></Quizes>
      },
      {
        path: '/quiz/:quizId',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        } ,
        element: <Questions></Questions>
      },
      {
        path: '/stats',
        element: <Stats></Stats>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

  return( 
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>);
}

export default App;
