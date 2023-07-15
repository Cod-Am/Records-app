import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [count, setCount] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`);
            const res = await response.json();
            setData(res);
        }
        getData();
        document.title = `(${count}) Employee`
    }, [count]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add Records: {count}</button>
            <div className='table'>
                <div className='tablecol'>
                    <h4>Name</h4>
                    <h4>Email</h4>
                </div>

            </div>
            {
                data.map((element, index) => {
                    return (
                        <Link><div className='tablecol' key={index}>
                            <p>{element.firstName}</p>
                            <p >{element.email}</p>
                        </div></Link>
                    )
                })
            }</div>
    )
}

export default Home