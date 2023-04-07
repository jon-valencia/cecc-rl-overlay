import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Router } from "react-router-dom";
import SocketContextProvider from 'contexts/SocketContexts';
import HomePage from 'pages/HomePage'
import ErrorPage from "pages/ErrorPage";
import Overlay from 'pages/Overlay';
import ControlPanel from "pages/ControlPanel";

import './App.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "overlay",
        element: <Overlay/>
    },
    {
        path: "control-panel",
        element: <ControlPanel/>
    }
]);

function App() { 
    return (
        <SocketContextProvider>
            <RouterProvider router={router}/>
        </SocketContextProvider>
    );
}

export default App;