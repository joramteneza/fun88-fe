import { CarouselSlide, Game, Provider } from "../types";
import { carouselImages, games, providers } from "./mockData";

export const fetchGames = async (): Promise<Game[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(games), 3000));
};

export const fetchProviders = async (): Promise<Provider[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(providers), 3000));
};


export const fetchCarouselData = async (): Promise<CarouselSlide[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(carouselImages), 2000));
};
