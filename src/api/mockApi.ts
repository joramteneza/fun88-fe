import { CarouselSlide, Game, Provider } from "../types";
import { carouselImages, games, providers } from "./mockData";

export const fetchGames = async (query: string = ""): Promise<Game[]> => {
    return new Promise((resolve) =>
        setTimeout(() => {
            const filteredGames = games.filter((game) =>
                game.name.toLowerCase().includes(query.toLowerCase())
            );
            resolve(filteredGames);
        }, 1000)
    );
};

export const fetchProviders = async (): Promise<Provider[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(providers), 3000));
};

export const fetchCarouselData = async (): Promise<CarouselSlide[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(carouselImages), 2000));
};
