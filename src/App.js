import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TransportationExpensesList from './commponents/Transportation/TransportationExpenses';
import RootLayout from "./commponents/pages/Root";
import HomePage from "./commponents/pages/Home";
import ErrorPage from "./commponents/pages/Error";
import UserInfo from "./commponents/pages/UserInfo";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        id: "root",
        children: [
            {index: true, element: <HomePage/>},
            {
                path: "transportation",
                element: <TransportationExpensesList/>
            },
            {
                path: "userinfo",
                element: <UserInfo/>
            }
        ]
    },
    {
        path: "error",
        element: <ErrorPage/>
    }
]);

function App() {

    return (
        <div><RouterProvider router={router}/></div>
    )
}

export default App;
