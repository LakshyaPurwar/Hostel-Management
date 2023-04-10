import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import RootLayout from './Pages/RootLayout/RootLayout';
import FeesPage from "./Pages/FeesPage/FeesPage";
import HomePage from "./Pages/HomePage/HomePage";
import ComplaintsPage from "./Pages/ComplaintsPage/ComplaintsPage";
import SingleComplaint from './Pages/SingleComplaintPage/SingleComplaint';


import { FeesDataLoader } from './Pages/FeesPage/FeesPage';
import { SingleFeesLoader } from './Pages/singleFeesPage/SingleFeesPage';
import SingleFees from './Pages/singleFeesPage/SingleFeesPage';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <div>Something went wrong</div>, children: [

      { path: '/', element: <HomePage />, },

      { path: '/complaints' ,children:[
        { path:'/complaints' , element:<ComplaintsPage/>},
        { path : ':complaintId' , element:<SingleComplaint/>},
      ] },
      
      { path: '/fees',  children:[
        { path:'',element: <FeesPage />  , loader:FeesDataLoader},
        {path:':studentId' , element:<SingleFees/>,  loader:SingleFeesLoader}
      ]},


    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
