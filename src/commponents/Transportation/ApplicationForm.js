import InputUI from "../UI/Input";
import SelectUI from "../UI/Select";

function ApplicationForm({keycloak}) {

    const handleSubmit = function (event) {
        event.preventDefault();
        console.log("submit");
        
        const form = document.getElementById("form");
        console.log(form);
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        saveExpense(data, keycloak);
    }
    const labelClassName = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    const inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return (
        <div className=" p-2 ">
            <form id="form"
                onSubmit={handleSubmit}
                className=" pt-2 bg-green-200 pb-2 ">

                <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                    <InputUI type="text" name="origin" displayName="出発地" labelClassName={labelClassName}
                             inputClassName={inputClassName} required/>
                    <InputUI type="text" name="destination" displayName="目的地" labelClassName={labelClassName}
                             inputClassName={inputClassName} required/>
                    <InputUI type="text" name="transportation-name" displayName="交通機関名"
                             labelClassName={labelClassName} inputClassName={inputClassName} required/>
                    <InputUI type="number" name="expense" displayName="費用" labelClassName={labelClassName}
                             inputClassName={inputClassName} required/>
                    <SelectUI name="one_way" displayName="片道/往復" inputClassName={inputClassName}
                              labelClassName={labelClassName} required
                              options={
                                  [
                                      {val: true, name: "片道"},
                                      {val: false, name: "往復"},
                                  ]
                              }/>
                    <InputUI type="date" name="departure_date" displayName="利用日" labelClassName={labelClassName}
                             inputClassName={inputClassName} required/>
                </div>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>

            </form>
        </div>
    )
}

async function saveExpense(data, keycloak){
    const token = await keycloak.token;
    const res = await fetch("http://localhost:8080/transportation/expense", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(data),
    });
}

export default ApplicationForm;