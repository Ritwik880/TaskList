import React, { useState, useEffect } from 'react';

//librray import
import { useLocation, useNavigate } from 'react-router-dom';

//constant imports
import { TIME1, TIME2, TIME3 } from '../constants/status';


const ViewTask = () => {
    const [input, setInput] = useState('');
    const location = useLocation();
    const data = location.state?.newArray;
    const [incommingData, setIncommingData] = useState(data);
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
    }, [location])


    //logic for deleting individual task!
    const handleDelete = (id) => {
        console.log(id);
        const updataList = incommingData.filter(
            (item) => item.taskName !== id
        );
        setIncommingData(updataList)
    }

    useEffect(() => {
    }, [handleDelete])


    //logic for navigating to next route
    const navigate = useNavigate();
    const hanldeViewJokes = () => {
        navigate('/jokesSpot')
    }

    //logic for searching the individual task!
    const searchItems = (searchValue) => {
        setInput(searchValue)
        if (input !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(data)
        }
    }

    //logic for sorting table data
    const sortTable = () => {
        let sortedProducts = [...data];
        sortedProducts.sort((a, b) => {
            if (a.taskName < b.taskName) {
                return -1;
            }
            if (a.taskName > b.taskName) {
                return 1;
            }
            return 0;
        });
    }
    return (
        <>
            <section className="landing-section">
                <div className="row container">
                    <div className="landing-form">
                        <div className="input">
                            <input type="text" placeholder="Search.." onChange={(e) => searchItems(e.target.value)} />
                        </div>
                        <div className="sortDiv mb-2">
                            <button style={{ background: '#000' }} className='sortBtn' onClick={sortTable}>Sort</button>
                        </div>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">End Time</th>
                                        <th scope="col">Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        input.length > 1 ? (
                                            filteredResults && filteredResults.map((item, id) => {

                                                let indexNo = incommingData.length;
                                                let name2 = item.taskName;

                                                let backgroundColor;
                                                let text;

                                                let backgroundColor2;
                                                let text2;

                                                let status = item.startTime;
                                                switch (status) {
                                                    case TIME1: {
                                                        backgroundColor = '#27ae60';
                                                        text = 'Scheduled';
                                                        break;
                                                    }
                                                    case TIME2: {
                                                        backgroundColor = '#f1c40f';
                                                        text = 'Running';
                                                        break;
                                                    }
                                                    case TIME3: {
                                                        backgroundColor = '#e74c3c';
                                                        text = 'Expired';
                                                        break;
                                                    }

                                                }

                                                let status2 = item.endTime;
                                                switch (status2) {
                                                    case TIME1: {
                                                        backgroundColor2 = '#27ae60';
                                                        text2 = 'Scheduled';
                                                        break;
                                                    }
                                                    case TIME2: {
                                                        backgroundColor2 = '#f1c40f';
                                                        text2 = 'Running';
                                                        break;
                                                    }
                                                    case TIME3: {
                                                        backgroundColor2 = '#e74c3c';
                                                        text2 = 'Expired';
                                                        break;
                                                    }

                                                }
                                                return (
                                                    <tr key={id}>
                                                        <th scope="row">
                                                            {
                                                                indexNo
                                                            }
                                                        </th>
                                                        <td>
                                                            {item.taskName}
                                                        </td>
                                                        <td> {item.description}</td>
                                                        <td><button style={{ background: backgroundColor ? backgroundColor : '#27ae60' }} className='statusBtn'>
                                                            {
                                                                text ? text : 'Scheduled'
                                                            }
                                                        </button></td>
                                                        <td><button style={{ background: backgroundColor2 ? backgroundColor2 : '#e74c3c' }} className='statusBtn'>
                                                            {
                                                                text2 ? text2 : 'Expired'
                                                            }
                                                        </button></td>
                                                        <td>
                                                            <button style={{ background: '#000' }} className='statusBtn' onClick={() => handleDelete(name2)}>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        ) : (

                                            incommingData && incommingData.map((item, id) => {

                                                let indexNo = incommingData.length;

                                                let name = item.taskName;

                                                let backgroundColor;
                                                let text;

                                                let backgroundColor2;
                                                let text2;

                                                let status = item.startTime;
                                                switch (status) {
                                                    case TIME1: {
                                                        backgroundColor = '#27ae60';
                                                        text = 'Scheduled';
                                                        break;
                                                    }
                                                    case TIME2: {
                                                        backgroundColor = '#f1c40f';
                                                        text = 'Running';
                                                        break;
                                                    }
                                                    case TIME3: {
                                                        backgroundColor = '#e74c3c';
                                                        text = 'Expired';
                                                        break;
                                                    }

                                                }

                                                let status2 = item.endTime;
                                                switch (status2) {
                                                    case TIME1: {
                                                        backgroundColor2 = '#27ae60';
                                                        text2 = 'Scheduled';
                                                        break;
                                                    }
                                                    case TIME2: {
                                                        backgroundColor2 = '#f1c40f';
                                                        text2 = 'Running';
                                                        break;
                                                    }
                                                    case TIME3: {
                                                        backgroundColor2 = '#e74c3c';
                                                        text2 = 'Expired';
                                                        break;
                                                    }

                                                }
                                                return (
                                                    <tr key={id}>
                                                        <th scope="row">
                                                            {
                                                                indexNo
                                                            }
                                                        </th>
                                                        <td>
                                                            {item.taskName}
                                                        </td>
                                                        <td> {item.description}</td>
                                                        <td><button style={{ background: backgroundColor ? backgroundColor : '#27ae60' }} className='statusBtn'>
                                                            {
                                                                text ? text : 'Scheduled'
                                                            }
                                                        </button></td>
                                                        <td><button style={{ background: backgroundColor2 ? backgroundColor2 : '#e74c3c' }} className='statusBtn'>
                                                            {
                                                                text2 ? text2 : 'Expired'
                                                            }
                                                        </button></td>
                                                        <td>
                                                            <button style={{ background: '#000' }} className='statusBtn' onClick={() => handleDelete(name)}>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        )
                                    }



                                </tbody>
                            </table>
                        </div>


                        <div className='viewJokesDiv'>
                            <button className='viewJokesBtn' onClick={hanldeViewJokes}>View All Jokes</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ViewTask