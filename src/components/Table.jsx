import { FaSearch } from "react-icons/fa";

function Table({users, searchUser, setUserName}){

    function changeHandler(event){
        setUserName(event.target.value)
    }


    return(

        <div className="overflow-x-auto rounded-lg border border-gray-200 hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-blue-300 hover:shadow-lg">

        <div
            className=" py-2 px-2 flex items-center gap-3 justify-end">

            <input
                type="text"
                className=" border-2 border-gray-300 rounded-md "
                placeholder="Search User"
                onChange={changeHandler}
            >
            </input>

            <FaSearch onClick={searchUser} />
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">First Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Last Name </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Age</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Email</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Phone No.</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                {
                    users.map( user => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">{user.firstName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.lastName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.age}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.phone}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
        </div>
    )

}

export default Table;