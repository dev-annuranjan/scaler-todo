import { Category, JokeAPIResponse } from "@/types/joke";
import axios, { Axios } from "axios";

class JokeService {
    private apiInstance: Axios;
    constructor() {
        this.apiInstance = axios.create({
            baseURL: "https://v2.jokeapi.dev/joke",
            responseType: "json"
        });
    }

    public async getJokeByCategories(categories: Category[]): Promise<JokeAPIResponse> {
        const { data } = await this.apiInstance.get<JokeAPIResponse>(categories.join(','))
        return data;
    }
}

const instance = new JokeService();
export default instance;