import { createContext, useContext, useMemo, useReducer } from "react";
import reducer from "./reducer/reducer";
import Constant from "./reducer/reducerTypes";

const appContext = createContext<any>([]);
const { Provider }: any = appContext;

const initialState = {};

export default function AppProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(
        () => ({
            ...state,
        }),
        [state]
    );

    return <Provider value={contextValue}>{children}</Provider>;
}

export const useAppState = () => useContext(appContext);
