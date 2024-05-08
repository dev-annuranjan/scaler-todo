export type Setup = string;
export type Delivery = string;
export type Category = "Programming" | "Dark" | "Pun" | "Spooky" | "Miscellaneous" | "Christmas" | "Any";

export type TwoPart = {
    setup: Setup;
    delivery: Delivery;
}

export type Joke = string | TwoPart;

export type JokeAPIResponse = {
    error: boolean;
    category: Category,
    type: string;
    setup?: Setup;
    delivery?: Delivery;
    joke?: string;
    flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
    },
    id: number;
    safe: boolean;
    lang: string;

}