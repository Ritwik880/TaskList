import React, { useState, useEffect } from 'react'

//import Jokes css
import '../Jokes.css';

//library import
import { ColorRing } from 'react-loader-spinner';

//import context
import { useGlobalContext } from '../context';


const JokesSpot = () => {
    const { jokes, loading } = useGlobalContext();
    const [input, setInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    //logic for searching the individual joke!
    const searchItems = (searchValue) => {
        setInput(searchValue)
        if (input !== '') {
            const filteredData = jokes.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(jokes)
        }
    }

    return (
        <>
            {
                loading ? <div className='loader'>
                    <ColorRing
                        visible={true}
                        height="120"
                        width="120"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
                    : (

                        <div className="container my-4">
                            <h1 className='text-center'>Fun Time</h1>
                            <div className="input">
                                <input type="text" placeholder="Search.." onChange={(e) => searchItems(e.target.value)} />
                            </div>
                            <div className="row m-2">
                                {input.length > 1 ? (
                                    filteredResults && filteredResults.map((item, id) => {
                                        const type = item.type;
                                        const convertType = type.toUpperCase();

                                        const language = item.lang;
                                        const convertLanguage = language.toUpperCase();
                                        return (
                                            <div key={id} className="col-sm-6 col-md-4 v my-2">
                                                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-center h2">Category: {item.category} </h5>
                                                        <br />

                                                        <h6 className="card-title text-left">Joke: {item.joke} </h6>
                                                        <br />
                                                        <h6 className="card-title text-left">Type: {convertType} </h6>
                                                        <br />
                                                        <h6 className="card-title text-left">Language: {convertLanguage} </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    jokes.map((item, id) => {
                                        const type = item.type;
                                        const convertType = type.toUpperCase();

                                        const language = item.lang;
                                        const convertLanguage = language.toUpperCase();
                                        return (
                                            <div key={id} className="col-sm-6 col-md-4 v my-2">
                                                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-center h2">Category: {item.category} </h5>
                                                        <br />

                                                        <h6 className="card-title text-left">Joke: {item.joke} </h6>
                                                        <br />
                                                        <h6 className="card-title text-left">Type: {convertType} </h6>
                                                        <br />
                                                        <h6 className="card-title text-left">Language: {convertLanguage} </h6>

                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })

                                )}
                            </div>
                        </div>
                    )
            }


        </>
    )
}

export default JokesSpot