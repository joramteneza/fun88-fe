import { create } from "zustand";
import { Game, Provider } from "../types"; 
import { fetchGames, fetchProviders } from "../api/mockApi"; 

interface GamesState {
    games: Game[];
    originalGames: Game[];
    providers: Provider[];
    selectedProviders: string[];
    isGamesLoading: boolean;
    isProviderLoading: boolean;
    selectedTab: string;
    searchQuery: string;
    isSearchActive: boolean;
    fetchGames: (query?: string) => Promise<void>;
    fetchProviders: () => Promise<void>;
    toggleFavorite: (id: string) => void;
    setSelectedTab: (tab: string) => void;
    setSearchQuery: (query: string) => void;
    toggleSearch: () => void;
    toggleProviderSelection: (providerId: string) => void;
}

export const useGamesStore = create<GamesState>((set, get) => ({
    games: [],
    originalGames: [],
    providers: [],
    selectedProviders: [],
    isGamesLoading: true,
    isProviderLoading: true,
    selectedTab: "start",
    searchQuery: "",
    isSearchActive: false, 
    fetchGames: async (query = "") => {
        set({ isGamesLoading: true });
        try {
            const fetchedGames = await fetchGames(query);
            const { selectedProviders, originalGames } = get();

            const filteredGames = selectedProviders.length
                ? fetchedGames.filter((game) => selectedProviders.includes(game.provider))
                : fetchedGames;

            const updatedGames = filteredGames.map((game) => {
                const existingGame = originalGames.find((g) => g.id === game.id);
                return existingGame || game;
            });

            set({ games: updatedGames, originalGames: updatedGames, isGamesLoading: false });
        } catch (error) {
            console.error("Failed to fetch games:", error);
            set({ isGamesLoading: false });
        }
    },
    fetchProviders: async () => {
        set({ isProviderLoading: true });
        try {
            const providers = await fetchProviders();
            set({ providers, isProviderLoading: false });
        } catch (error) {
            console.error("Failed to fetch providers:", error);
            set({ isProviderLoading: false });
        }
    },
    toggleFavorite: (id: string) => {
        const { games } = get();
        const updatedGames = games.map((game) =>
            game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
        );
        set({ games: updatedGames, originalGames: updatedGames });
    },
    setSelectedTab: (tab) => {
        set({ selectedTab: tab });
        const { searchQuery, fetchGames } = get();
        fetchGames(searchQuery); 
    },
    setSearchQuery: (query) => {
        set({ searchQuery: query });
        const { fetchGames } = get();
        fetchGames(query); 
    },
    toggleSearch: () => {
        const current = get().isSearchActive;
        set({ isSearchActive: !current });
    },
    toggleProviderSelection: (providerId) => {
        const { selectedProviders } = get();
        const isSelected = selectedProviders.includes(providerId);

        const updatedProviders = isSelected
            ? selectedProviders.filter((id) => id !== providerId)
            : [...selectedProviders, providerId];

        set({ selectedProviders: updatedProviders });
        get().fetchGames();
    },
}));
