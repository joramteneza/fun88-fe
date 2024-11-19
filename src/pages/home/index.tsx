import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/layout/navigation";
import { games } from "../../api/mockData";
import { useSearchParams } from "react-router-dom";

const Home: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = searchParams.get("tab") || "start";

    const [selectedNav, setSelectedNav] = useState(initialTab);

    useEffect(() => {
        setSearchParams({ tab: selectedNav });
    }, [selectedNav, setSearchParams]);

    // Filter games by categoryId or display all for "start"
    const filteredGames =
        selectedNav === "start"
            ? games
            : games.filter((game) => game.categoryId === selectedNav);

    return (
        <div>
            <Navigation selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
            <main className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredGames.map((game) => (
                        <div key={game.id} className="border rounded-lg p-2 shadow-md">
                            <img
                                src={game.img}
                                alt={game.name}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="mt-2 text-center text-sm font-semibold">
                                {game.name}
                            </h3>
                        </div>
                    ))}
                </div>
                {filteredGames.length === 0 && (
                    <div className="text-center text-gray-500 mt-4">
                        No games found for this category.
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
