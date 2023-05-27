const reducer = (state, action) => {
    switch (action.type) {
        case "GET_JOKES":
            return {
                ...state,
                jokes: action.payload.jokes,
                amount: action.payload.amount,
                loading: action.loading,
            }

    }
    return state;

}
export default reducer