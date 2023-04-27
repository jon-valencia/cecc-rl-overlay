import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from 'pages/HomePage'
import ErrorPage from "pages/ErrorPage";
import Overlay from 'pages/Overlay';
import ControlPanel from "pages/ControlPanel";
import PostGame from 'pages/PostGame';

import { Provider } from 'react-redux';
import store from 'redux/store';
import SocketManager from 'container/SocketManager'

import './App.css';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "overlay",
        element: <Overlay />
    },
    {
        path: "control-panel",
        element: <ControlPanel />
    },
    {
      path: "postgame",
      element: <PostGame />
    }
]);

function App() {
    
    
    return (
        <>
        <Provider store={store}>
            <SocketManager/>
            <RouterProvider router={router}/>
        </Provider>
        {/*<SocketContextProvider>
            <RouterProvider router={router}/> 
    </SocketContextProvider>*/}</>  
    );
}

export default App;