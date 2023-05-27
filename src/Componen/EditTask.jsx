import React, { useState } from 'react';

//library import
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { useNavigate } from 'react-router-dom';

const EditTask = () => {

    //Managing State for User Login 
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState("10:00");
    const [endTime, setEndTime] = useState("11:00");
    const [newEntry, setNewEntry] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArray = [{
            taskName: taskName,
            description: description,
            startTime: startTime,
            endTime: endTime
        }];
        setNewEntry([...newEntry, newArray]);
        localStorage.setItem('userTask', newArray);
        console.log(newArray)
        setTaskName("");
        setDescription("");
        setStartTime("10:00");
        setEndTime("11:00")
        navigate("/viewTask", { state: { newArray } });
    };
    return (
        <>
            <section className="landing-section">
                <div className="row container">
                    <div className="col-lg-3 col-md-12">
                        <h6 className="landing-head">Create Your Task</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control form-input" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                                <input type="text" className="form-control form-input" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                <div className='mt-2'>
                                    <TimePicker onChange={setStartTime} value={startTime} amPmAriaLabel={'AM'} disableClock={true} clockClassName='start-time' />
                                    <TimePicker onChange={setEndTime} value={startTime} amPmAriaLabel={'PM'} disableClock={true} clockClassName='start-time' />
                                </div>
                                <button className="form-reset-btn" type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                    {
                        newEntry.length !== 0 ? (
                            newEntry.map((item, id) => {
                                return (
                                    <div key={id} className='col-lg-3 col-md-12'>
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-body">

                                                <h5 className="card-title">
                                                    {
                                                        item.taskName
                                                    }
                                                </h5>
                                                <p className="card-text">
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                                <p className="card-text">
                                                    Start Time: {
                                                        item.startTime
                                                    }
                                                </p>

                                                <p className="card-text">
                                                    End Time: {
                                                        item.endTime
                                                    }
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) :
                            <div className="card" style={{ width: '14rem', height: '5rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        No Task Found!
                                    </h5>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default EditTask