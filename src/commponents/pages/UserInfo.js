import {keycloakContext} from "../../App";
import UserInfoDetail from "./UserInfoDetail";

const UserInfo = () => {

    return (
        <div className="animate-fadeIn">
            <keycloakContext.Consumer>

                {(value) => {
                    const {keycloakState} = value;
                    return <UserInfoDetail keycloak={keycloakState.keycloak}/>
                }
                }

</keycloakContext.Consumer>
        </div>
    )
}
export default UserInfo