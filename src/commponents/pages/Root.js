import Nav from "../Nav";
import {Outlet} from "react-router-dom";
import {keycloakContext} from "../../App";

function RootLayout() {
    //const keycloakState;
    return <>

        <keycloakContext.Consumer>
            {(value) => {
                const {keycloakState} = value;
                return <Nav keycloak={keycloakState.keycloak}/>
            }
            }
        </keycloakContext.Consumer>
        <main>
            <Outlet/>
        </main>
    </>
}

export default RootLayout;