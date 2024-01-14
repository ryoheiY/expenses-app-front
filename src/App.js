import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TransportationExpensesList from './commponents/Transportation/TransportationExpenses';
import RootLayout from "./commponents/pages/Root";
import HomePage from "./commponents/pages/Home";
import ErrorPage from "./commponents/pages/Error";
import Keycloak from 'keycloak-js';
import {createContext, useEffect, useState} from "react";
import UserInfo from "./commponents/pages/UserInfo";

export const keycloakContext = createContext(null);

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
    {}
]);

function App() {
    const keycloak = new Keycloak({
        url: 'http://localhost:18080/',
        realm: 'demo',
        clientId: 'react-demo'
    });
    const [keycloakState, setKeycloakState] = useState({
        keycloak: null,
        authenticated: false,
    });

    useEffect(() => {
        //ページロード時の処理で、Keycloak.init関数を呼び出し、未認証の場合
        //認可コードフローを開始しログインページを表示
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            setKeycloakState({keycloak: keycloak, authenticated: authenticated});
        })
    }, [])

    return (
        <keycloakContext.Provider value={{keycloakState}}>
            {keycloakState.authenticated && <>
                <RouterProvider router={router}/>
            </>}
            {!keycloakState.authenticated && <div>認証中ーーー</div>}
        </keycloakContext.Provider>);
}

export default App;
