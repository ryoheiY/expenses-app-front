import {useNavigate} from 'react-router-dom'

const Logout = (props) => {

    const keycloakState = props.keycloak
    // ログイン画面に遷移
    const navigate = useNavigate()
    navigate('/')
    return (
        <div>
            <button onClick={() => keycloakState.keycloak.logout()}>
                Logout
            </button>
        </div>
    )
}
export default Logout