import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from './MyContext'


const Login = () => {
    const { errorMsg } = useContext(Context)
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const fetchApi = async function () {
            // const url = await fetch('https://jsonplaceholder.typicode.com/users')
            // const res = await url.json()
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => setApiData(res?.data))
                .catch(error => console.log(error))
        }
        fetchApi()
        console.log(apiData)
    }, [])

    const rowData = apiData?.map(data => {
        const { id, name, username, email, phone, website } = data;

        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
            </tr>
        )
    })

    return (
        <>
            <div className={`${errorMsg && 'text-danger'}`}>
            </div>
            <h3>Employee Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData ? rowData : <img src='https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif' alt='pre-loader' />}
                </tbody>
            </table>
        </>
    )
}

export default Login
