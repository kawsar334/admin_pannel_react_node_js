import React, { useState } from 'react'
import "./pagination.scss"

const Pagination = () => {

    const data = [
        {
            id: 1,
            name: "kawsar firoz",

        },
        {
            id: 2,
            name: "kawsar firoz",

        },
        {
            id: 3,
            name: "kawsar firoz",

        },
        {
            id: 4,
            name: "kawsar firoz",

        }, {
            id: 5,
            name: "kawsar firoz",

        }, {
            id: 6,
            name: "kawsar firoz",

        }, {
            id: 7,
            name: "kawsar firoz",

        }, {
            id: 8,
            name: "kawsar firoz",

        },

    ];
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerpage = 4;
    const lastIndex = currentPage * recordPerpage;
    const firstIndex = lastIndex - recordPerpage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordPerpage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    const handleNext = (e)=>{
        e.preventDefault();
        if (currentPage > firstIndex) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePrev = (e)=>{
        e.preventDefault();
        
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='pagination'>
            {records.map((user, i) => (
                <div className='user' key={user.id}><b>{user.id}</b> {user.name} </div>
            ))}
            <div>
                <button onClick={handlePrev} className='btn' disabled={currentPage === 1}>Prev</button>
                {
                    numbers.map((n, i) => (
                        <>
                      <button  className={currentPage === n ?'btn active' : 'btn'} key={i} onClick={()=>setCurrentPage(n)}>{n}</button>
                        </>
                        
                    ))
                }
                <button className='btn' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Pagination