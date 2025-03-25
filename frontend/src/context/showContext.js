import { createContext, useState, useContext } from "react";

const ShowContext = createContext();

export const ShowContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const [animeDetails, setAnimeDetails] = useState({});

    return (
        <ShowContext.Provider
            value={{
                show,
                setShow,
                animeDetails,
                setAnimeDetails,
            }}
        >
            {children}
        </ShowContext.Provider>
    );
};

export const useShowContext = () => {
    return useContext(ShowContext);
};
