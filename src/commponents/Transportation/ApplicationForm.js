function ApplicationForm() {

    const handleSubmit = function(event){
        event.preventDefault();
        console.log("submit");
    }


    return (
        <div className=" p-2 ">
            <form 
                onSubmit={handleSubmit}
                className=" pt-2 bg-green-200 pb-2 ">
                 
                <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                    <div>
                        <label htmlFor="origin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">出発地</label>
                        <input type="text" name="origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="出発地" required />
                    </div>
                    <div>
                        <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">目的地</label>
                        <input type="text" name="destination" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="目的地" required />
                    </div>
                    <div>
                        <label htmlFor="transportation name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">交通機関名</label>
                        <input type="text" name="transportation name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="交通機関名" required />
                    </div>
                    <div>
                        <label htmlFor="expense" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">費用</label>
                        <input type="number" name="expense" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="費用" required />
                    </div>
                    <div>
                        <label htmlFor="one-way" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">片道/往復</label>
                        <select type="" name="one-way" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="交通機関名" required>
                            <option value={1}>片道</option>
                            <option value={0}>往復</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="日付" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">利用日</label>
                        <input type="date" name="departure-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

        </form>
        </div >
    )
}

export default ApplicationForm;