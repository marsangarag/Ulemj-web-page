import { createContext, useContext, useMemo, useReducer } from "react";
import reducer from "./reducer/reducer";
import Constant from "./reducer/reducerTypes";

const appContext = createContext<any>([]);
const { Provider }: any = appContext;

const initialState = {
    lang: "en",
    brand: "",
};

export default function AppProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(
        () => ({
            ...state,
            setLang: (payload: string) => {
                dispatch({ type: Constant.SET_LANG, payload });
            },

            setBrand: (payload: string) => {
                dispatch({ type: Constant.SET_BRAND, payload });
            },
        }),
        [state]
    );

    return <Provider value={contextValue}>{children}</Provider>;
}

export const useAppState = () => useContext(appContext);
