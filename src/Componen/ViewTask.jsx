import React, { useState, useEffect } from 'react';

//librray import
import { useLocation, useNavigate } from 'react-router-dom';

//constant imports
import { TIME1, TIME2, TIME3, TIME4, TIME6, TIME7, TIME8, TIME9, TIME10, TIME11, TIME12, TIME13, TIME14, TIME15, TIME16, TIME17, TIME18, TIME19, TIME20, TIME21, TIME22, TIME23, TIME24 } from '../constants/status';


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
    

    //logic for navigating to next r
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
    return (
        <>
            <section className="landing-section">
                <div className="row container">
                    <div className="landing-form">
                        <div className="input">
                            <input type="text" placeholder="Search.." onChange={(e) => searchItems(e.target.value)} />
                        </div>
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
                                                    <td><button style={{ background: backgroundColor }} className='statusBtn'>
                                                        {
                                                            text
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
                                                    <td><button style={{ background: backgroundColor }} className='statusBtn'>
                                                        {
                                                            text
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