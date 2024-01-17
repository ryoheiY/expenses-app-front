import Nav from "../Nav";
import {useRouteError, useSearchParams} from "react-router-dom";

function ErrorPage() {
    const err = useRouteError();
    console.log(err)
    const [searchParams] = useSearchParams();
    const errors = searchParams?.get("json");
    let message = 'ページが見つかりませんでした。';
    let status;
    if (!err) {
        message = errors.message;
        status = errors.status;
    } else {
        message = err.statusText;
        status = err.status;
    }

    return <>
        <Nav/>
        <div className="animate-fadeIn bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
            <div
                className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">{status}</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Error</p>
                <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
                    {message}
                </p>
            </div>
        </div>
    </>
}

export default ErrorPage;