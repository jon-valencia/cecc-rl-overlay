import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from 'pages/HomePage'
import ErrorPage from "pages/ErrorPage";
import Overlay from 'pages/Overlay';
import ControlPanel from "pages/ControlPanel";

import SocketContextProvider from 'contexts/SocketContexts';
import { Provider } from 'react-redux';
import store from 'redux/store';
import SM from 'container/sm'

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
    }
]);

function App() {
    
    
    return (
        <>
        <Provider store={store}>
            <SM/>
            <RouterProvider router={router}/>
        </Provider>
        {/*<SocketContextProvider>
            <RouterProvider router={router}/> 
    </SocketContextProvider>*/}</>  
    );
}

export default App;