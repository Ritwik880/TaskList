import React, { useEffect } from 'react';

//librray import
import { useLocation } from 'react-router-dom';

//constant imports
import { TIME1, TIME2, TIME3, TIME4, TIME6, TIME7, TIME8, TIME9, TIME10, TIME11, TIME12, TIME13, TIME14, TIME15, TIME16, TIME17, TIME18, TIME19, TIME20, TIME21, TIME22, TIME23, TIME24 } from '../constants/status';


const ViewTask = () => {
    const location = useLocation();

    //getting state
    const data = location.state?.newArray;
    console.log(data);



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

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((item, id) => {

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
                                                        id
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
                                                <td><button style={{ background: backgroundColor2 }} className='statusBtn'>
                                                    {
                                                        text2
                                                    }
                                                </button></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ViewTask