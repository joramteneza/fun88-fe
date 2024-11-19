import { CarouselSlide, Game, Navigation, Provider } from "../types";

export const games: Game[] = [
    {
        id: "1",
        name: "Sugar Rush",
        img: "/assets/images/games/sugar-rush.webp",
        categoryId: "new",
        provider: "1", // Pragmatic Play
        isFavorite: false,
    },
    {
        id: "2",
        name: "Shaolin Crew",
        img: "/assets/images/games/shaolin-crew.webp",
        categoryId: "slots",
        provider: "2", // Expanse Studios
        isFavorite: false,
    },
    {
        id: "3",
        name: "Big Bad Wolf",
        img: "/assets/images/games/big-bad-wolf.webp",
        categoryId: "live",
        provider: "3", // Playtech
        isFavorite: false,
    },
    {
        id: "4",
        name: "Book of Egypt",
        img: "/assets/images/games/book-of-egypt.webp",
        categoryId: "slots",
        provider: "2", // Expanse Studios
        isFavorite: false,
    },
    {
        id: "5",
        name: "Azteca Bonus Lines: Powerplay Jackpot",
        img: "/assets/images/games/azteca-bonus-lines.webp",
        categoryId: "jackpots",
        provider: "3", // Playtech
        isFavorite: false,
    },
    {
        id: "6",
        name: "Pirates Power",
        img: "/assets/images/games/pirates-power.webp",
        categoryId: "slots",
        provider: "2", // Expanse Studios
        isFavorite: false,
    },
    {
        id: "7",
        name: "Crocodile Blitz Xtreme FB",
        img: "/assets/images/games/crocodile-blitz.webp",
        categoryId: "new",
        provider: "3", // Playtech
        isFavorite: false,
    },
    {
        id: "8",
        name: "Anaconda Wild 2 Powerplay Jackpot",
        img: "/assets/images/games/anaconda-wild-2.webp",
        categoryId: "jackpots",
        provider: "3", // Playtech
        isFavorite: false,
    },
    {
        id: "9",
        name: "Maya Jackpot",
        img: "/assets/images/games/maya-jackpot.webp",
        categoryId: "jackpots",
        provider: "4", // Skywind Group
        isFavorite: false,
    },
    {
        id: "10",
        name: "Inca Jackpot",
        img: "/assets/images/games/inca-jackpot.webp",
        categoryId: "jackpots",
        provider: "4", // Skywind Group
        isFavorite: false,
    },
    {
        id: "11",
        name: "Beach Life",
        img: "/assets/images/games/beach-life.webp",
        categoryId: "slots",
        provider: "3", // Playtech
        isFavorite: false,
    },
    {
        id: "12",
        name: "Pride of Persia Empire Treasures",
        img: "/assets/images/games/pride-of-persia.webp",
        categoryId: "jackpots",
        provider: "4", // Skywind Group
        isFavorite: false,
    },
];



export const providers: Provider[] = [
    {
        id: "1",
        name: "Ezugi",
        img: "/assets/images/providers/ezugi.webp",
    },
    {
        id: "2",
        name: "EveryMatrix",
        img: "/assets/images/providers/every-matrix.webp",
    },
    {
        id: "3",
        name: "Evolution",
        img: "/assets/images/providers/evolution.webp",
    },
    {
        id: "4",
        name: "Expanse Studios",
        img: "/assets/images/providers/expanse-studios.webp",
    },
    {
        id: "5",
        name: "GameArt",
        img: "/assets/images/providers/gameart.webp",
    },
    {
        id: "6",
        name: "Habanero",
        img: "/assets/images/providers/habanero.webp",
    },
    {
        id: "7",
        name: "Hacksaw Gaming",
        img: "/assets/images/providers/hacksaw-gaming.webp",
    },
    {
        id: "8",
        name: "Inbet Games",
        img: "/assets/images/providers/inbet-games.webp",
    },
    {
        id: "9",
        name: "mPlay",
        img: "/assets/images/providers/mplay.webp",
    },
    {
        id: "10",
        name: "NetEnt",
        img: "/assets/images/providers/netent.webp",
    },
    {
        id: "11",
        name: "PG Slot Gamestop",
        img: "/assets/images/providers/pg-slot-gamestop.webp",
    },
    {
        id: "12",
        name: "Play'n GO",
        img: "/assets/images/providers/play-n-go.webp",
    },
    {
        id: "13",
        name: "Playson",
        img: "/assets/images/providers/playson.webp",
    },
    {
        id: "14",
        name: "Playtech",
        img: "/assets/images/providers/playtech.webp",
    },
    {
        id: "15",
        name: "Pragmatic Play",
        img: "/assets/images/providers/pragmatic-play.webp",
    },
    {
        id: "15",
        name: "Pragmatic Play",
        img: "/assets/images/providers/pragmatic-play-2.webp",
    },
    {
        id: "16",
        name: "Red Tiger",
        img: "/assets/images/providers/red-tiger.webp",
    },
    {
        id: "17",
        name: "Relax Gaming",
        img: "/assets/images/providers/relax-gaming.webp",
    },
];


export const carouselImages: CarouselSlide[] = [
    { id: 1, image: '/assets/images/carousel/banner.webp', alt: 'Promotional Banner 1', title: 'Banner Title 1', position: 0 },
    { id: 2, image: '/assets/images/carousel/banner.webp', alt: 'Promotional Banner 2', title: 'Banner Title 2', position: 1 },
    { id: 3, image: '/assets/images/carousel/banner.webp', alt: 'Promotional Banner 3', title: 'Banner Title 3', position: 2 },
    { id: 4, image: '/assets/images/carousel/banner.webp', alt: 'Promotional Banner 4', title: 'Banner Title 4', position: 3 },
];

export const navigation: Navigation[] = [
    { id: "start", name: "start", label: "START" },
    { id: "new", name: "new", label: "NEW" },
    { id: "slots", name: "slots", label: "SLOTS" },
    { id: "live", name: "live", label: "LIVE" },
    { id: "jackpots", name: "jackpots", label: "JACKPOTS" },
    { id: "table-games", name: "table-games", label: "TABLE GAMES" },
    { id: "bingo", name: "bingo", label: "BINGO" },
    { id: "others", name: "others", label: "OTHERS" },
];
