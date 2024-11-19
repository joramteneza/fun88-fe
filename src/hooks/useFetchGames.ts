import { useState, useEffect } from "react";
import { Game } from "../types";
import { fetchGames } from "../api/mockApi";

export const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };
    getGames();
  }, []);

  return { games, loading, error };
};
