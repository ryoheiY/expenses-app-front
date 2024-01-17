import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TransportationExpensesList from './commponents/Transportation/TransportationExpenses';
import RootLayout from "./commponents/pages/Root";
import HomePage from "./commponents/pages/Home";
import ErrorPage from "./commponents/pages/Error";
import Keycloak from 'keycloak-js';
import {useEffect,} from "react";
import UserInfo from "./commponents/pages/UserInfo";
import ApplicationForm, { action } from './commponents/Transportation/ApplicationForm';
import SearchCondition from './commponents/Transportation/SearchCondtion';
import { Provider, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { keycloakActions } from './commponents/store/store';
import { data } from 'autoprefixer';
import { useState } from 'react';


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
                element: <TransportationExpensesList/>,
                children: [
                    {
                        path: "application",
                        element: <ApplicationForm />,
                    },
                    {
                        path: "search-list",
                        element: <SearchCondition />
                    }
                ]
            },
            {
                path: "userinfo",
                element: <UserInfo/>
            }
        ]
    },
    {
        path: "error",
        element: <ErrorPage />
    }
]);

function App() {
    
    return (
        // <keycloakContext.Provider value={{keycloakState}}>
        //     {keycloakState.authenticated && <>
        //         <RouterProvider router={router}/>
        //     </>}
        //     {!keycloakState.authenticated && <div>認証中ーーー</div>}
        // </keycloakContext.Provider>);
        <>{true && <div><RouterProvider router={router}/></div>}</>
       
       )
}

export default App;
