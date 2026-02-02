import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/ui/Navbar'
import MainLayout from './layout/MainLayout';
import Login from './pages/login'
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './pages/student/Courses'
import Mylearning from './pages/student/Mylearning';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element: (
          <>
          <HeroSection/>
           <Courses/>
          </>
        ),
      },

      {
        path:"login",
        element:<Login/>
      },
      {
        path:"Mylearning",
        element:<Mylearning />
      }
    ],

  },
]);

function App() {
  return (
    <main> 
      <RouterProvider  router = {appRouter}/>
    </main> 
  );
}

export default App
