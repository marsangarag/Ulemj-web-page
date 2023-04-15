import Constant from "./reducerTypes";

const reducer = (state: any, action: any) => {
    const { type } = action;
    switch (type) {
        case Constant.SET_LANG:
            return {
                ...state,
                lang: action.payload,
            };

        case Constant.SET_WINDOW: {
            return {
                ...state,
                window: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
