import { createContext, useState, useContext, useEffect } from "react";

const ShowContext = createContext();

export const ShowContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const [animeList, setAnimeList] = useState([]);

    const [title, setTtitle] = useState("");

    useEffect(() => {
        async function fetchAnime() {
            const response = await fetch("/api/anime");
            const json = await response.json();
            console.log(json);
            setAnimeList(json);
        }
        fetchAnime();
    }, []);

    return (
        <ShowContext.Provider
            value={{ show, setShow, animeList, setAnimeList, title, setTtitle }}
        >
            {children}
        </ShowContext.Provider>
    );
};

export const useShowContext = () => {
    return useContext(ShowContext);
};
