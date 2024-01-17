import Nav from "../Nav";
import {Outlet} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {keycloakActions} from "../store/store";
import {useEffect, useState} from 'react';
import Keycloak from 'keycloak-js';

function RootLayout() {
    const [keycloakState, setKeycloakState] = useState({keycloak: null, authenticated: false});
    const keycloak = new Keycloak({
        url: 'http://localhost:18080/',
        realm: 'demo',
        clientId: 'react-demo'
    });
    const dispatch = useDispatch();

    useEffect(() => {
        //ページロード時の処理で、Keycloak.init関数を呼び出し、未認証の場合
        //認可コードフローを開始しログインページを表示
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            console.log(authenticated, keycloak);
            const token = keycloak.token;
            setKeycloakState({keycloak: keycloak, authenticated: authenticated});
            dispatch(keycloakActions.save({token: {token, isAdmin: keycloak.hasRealmRole("ADMIN")},}));
            keycloak.loadUserInfo().then(UserInfo => {
                console.log(UserInfo);
                dispatch(keycloakActions.userInfo({
                    userInfo: {
                        name: UserInfo.name,
                        email: UserInfo.email,
                        id: UserInfo.sub
                    }
                }));
            });
        });


    }, [dispatch])

    //const keycloakState;
    return <>
        <Nav/>
        <main>
            {keycloakState.authenticated && <Outlet/>}
            {!keycloakState.authenticated && <div>認証処理中</div>}
        </main>
    </>
}

export default RootLayout;