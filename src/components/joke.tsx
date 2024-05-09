import { useState, useEffect } from 'react'
import { Joke } from '@/types/joke'
import getJokes from '@/services/JokesService';

export default function joke() {
    const [joke, setJoke] = useState<Joke | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getJokes.getJokeByCategories(["Any"]);
                if (data.joke) {
                    setJoke(data.joke)
                } else {
                    setJoke({ setup: data.setup ?? "", delivery: data.delivery ?? "" });
                }
            } catch (err) {

            }
        })();
    }, []);

    if (joke) {
        return (<>
            {typeof joke === "string" ?
                <p className='text-center align-middle'>{joke}</p> :
                <div className='text-center align-middle'>
                    <p>{joke.setup}</p>
                    <p>{joke.delivery}</p>
                </div>}
        </>
        );
    }
}
