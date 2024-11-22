export type Game = {
    id: string;
    name: string;
    img: string;
    categoryId: string;
    provider: string;
    isFavorite: boolean;
};

export type Provider = {
    id: string;
    name: string;
    img: string;
};

export type CarouselSlide = {
    id: number;
    image: string;
    alt: string;
    title: string;
    position: number;
};

export type Navigation = {
    id: string;
    name: "slots" | "new" | "start" | "live" | "jackpots" | "table-games" | "bingo" | "others";
    label: string;
};

export type FooterNavigation = {
    icon: IconType
    label: string;
};

export type IconType =
  | "search"
  | "slots"
  | "new"
  | "start"
  | "live"
  | "jackpots"
  | "table-games"
  | "bingo"
  | "others"
  | "favorite"
  | "favorite-mask"
  | "filter"
  | "sports"
  | "wallet"
  | "invite"
  | "bell"
  | "user"
  | "menu"
  