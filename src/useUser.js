import { useState, useEffect } from "react";

const useUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(
                "https://rickandmortyapi.com/api/character/2"
            );
            const data = await response.json();
            setUser(data);
        };
        getUser();
    }, []);

    return { user, setUser };
};

export default useUser;
