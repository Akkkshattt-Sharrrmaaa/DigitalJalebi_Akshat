import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import axios from 'axios'
import Table from './components/Table'
import toast, { Toaster } from 'react-hot-toast'

function App() {

    const [ fetchingData, setFetchingData ] = useState(false)
    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState("")

    useEffect( ()=>{

        const fetchUsers = async () => {
            try{
                setFetchingData(true)
                const res = await axios.get("https://dummyjson.com/users")
                const resUsers = res.data.users
                setUsers(resUsers)
                setFetchingData(false)
                toast.success("Users fetched successfully")
            }catch(error){
                toast.error("Error while fetching data")
                console.log(error)
            }
        }

        fetchUsers()

    },[])

    const searchUser = async function(){

        try{
            setFetchingData(true)
            const res = await axios.get(`https://dummyjson.com/users/search?q=${userName}`)
            const resUsers = res.data.users
            console.log(resUsers)
            setUsers(resUsers)
            setUserName("")
            setFetchingData(false)
            toast.success("User details fetched successfully")
        }catch(error){
            toast.error("Error while fetching data")
            console.log(error)
        }
    }

    return(
        <>
            <div>
                <Banner setFetchingData={setFetchingData} />
            </div>

            <div
                className=' p-20'
            >
            {
                fetchingData ?
                <div
                    className='spinner'
                ></div>
                :
                <div >
                    <Table users={users} searchUser={searchUser} setUserName={setUserName} />
                </div>
            }


            </div>

            <Toaster />
        </>

    )

}

export default App
