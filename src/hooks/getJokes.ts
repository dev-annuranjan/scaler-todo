import { Joke, TwoPart } from "@/types/joke";
import axios from "axios";
import { useEffect, useState } from "react";

function useGetJokes() {
    const [joke, setJoke] = useState<Joke | TwoPart>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://v2.jokeapi.dev/joke/Programming,Dark,Pun,Spooky?blacklistFlags=political,racist,sexist,explicit")
            .then((data) => {
                if (data.data.joke) {
                    setJoke(data.data.joke);
                } else setJoke({
                    setup: data.data.setup,
                    delivery: data.data.delivery
                });
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { joke, isLoading };
}
export default useGetJokes;