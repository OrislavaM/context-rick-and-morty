import { createContext } from "react";
import useUser from "./useUser";

export const Context = createContext();

//Context.Provider прокидывает данные по всей части приложения, которая им обернута
//useContext получает данные в любом компоненте части приложения которая обернута в Context.Provider

export const UserContextProvider = ({ children }) => {
    const { user, setUser } = useUser();

    return (
        <Context.Provider value={{ user: user, setUser: setUser }}>
            {children}
        </Context.Provider>
    );
};
