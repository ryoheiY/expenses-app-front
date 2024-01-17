import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
const UserInfoDetail = () => {
    const [user, setUser] = useState({ name: "", email: "", id: "", isAdmin: false });
    const keycloak = useSelector((state) => state.keycloak);

    useEffect(() => {
        async function load() {
            //loadUserInfoから取得したユーザーデータを元にuserを更新
            const UserInfo = await keycloak.userInfo;
            const isAdmin = keycloak.isAdmin;
            if(UserInfo){
                setUser({ name: UserInfo.name, email: UserInfo.email, id: UserInfo.sub, isAdmin })
            } 
        }
        load();
    }, [keycloak]);

    return (
        <div className=" bg-blue-100 overflow-hidden shadow rounded-lg border border-black">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    ユーザ情報を表示します。
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.name}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.email}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Role
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.isAdmin ? "管理者" : "なし"}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}
export default UserInfoDetail;