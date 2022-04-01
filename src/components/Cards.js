import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(error => { alert(error) })
        // const apiData = async function () {
        //     const apiResponse = await fetch(url);
        //     const response = await apiResponse.json()
        //     console.log(response)
        // }
        // apiData()
    }, [])
    const cardsItems = apiData.map(items => {
        const { name, id, email, website, company } = items;
        return (
            <React.Fragment key={id}>
                <div className="card mb-2">
                    <img src='https://picsum.photos/200/300?grayscale' className="card-img-top" alt="card-img" />
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <p className="card-text"> {company.bs} </p>
                        <a href="#" className="btn btn-primary"> {website} </a>
                    </div>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div>
            <section className='d-flex flex-wrap mb-3'>{cardsItems}</section>
        </div>
    )
}

export default Cards
