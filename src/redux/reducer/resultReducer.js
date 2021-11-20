const INITIAL_STATE = {
    item: '157 parkview avenue, daly city, california',
    results: []
}

const resultReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case "RESULT":
            return {
                ...state,results: action.payload
            }
        default:
            return state    
    };
};

export default resultReducer