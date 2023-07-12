import { useEffect, useState } from "react";
const KEY = "9f8f8f52e7fd4e629f25af8440bcd243";

export function useGames(query) {
  const [isLoading, setIsloading] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchGames() {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${KEY}&search=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Cannot fetch games");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Game not found");
        setGames(data.results);
        setError("");
        console.log(data.results);
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsloading(false);
      }
    }
    if (query.length < 3) {
      setGames([]);
      setError("");
      return;
    }

    fetchGames();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { games, isLoading, error };
}
