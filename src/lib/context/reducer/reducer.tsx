import Constant from "./reducerTypes";

const reducer = (state: any, action: any) => {
    const { type } = action;
    switch (type) {
        // case Constant
        //     return {
        //         ...state,
        //         header: action.payload,
        //     };

        default:
            return state;
    }
};

export default reducer;
