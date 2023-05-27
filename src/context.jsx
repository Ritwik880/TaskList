import React, {useEffect, useContext, useReducer} from "react";

//file import
import reducer from "./reducer";

//creating context
const AppContext = React.createContext();

let API = `https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10`;

const initialState = {
    loading: true,
    amount: 0,
    jokes: [],
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchAPIData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.jokes);
            dispatch(({
                type: "GET_JOKES",
                loading: false,
                payload: {
                    jokes: data.jokes,
                    amount: data.amount,
                  
                }
            }))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAPIData(`${API}`);
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};



// creating custom Hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };