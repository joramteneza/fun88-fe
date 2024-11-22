import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/layout/navigation";
import { useSearchParams } from "react-router-dom";
import Icon from "../../components/common/icon";
import { useGamesStore } from "../../store";
import { Skeleton } from "../../../src/components/ui/skeleton";

const Home: React.FC = () => {
    const { games,
        isGamesLoading: isLoading,
        fetchGames,
        toggleFavorite,
        selectedTab,
        setSelectedTab,
    } = useGamesStore();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const tab = searchParams.get("tab") || "start";
        setSelectedTab(tab);
    }, [searchParams, setSelectedTab]);

    useEffect(() => {
        setSearchParams({ tab: selectedTab });
    }, [selectedTab, setSearchParams]);
    useEffect(() => {
        fetchGames();
    }, [fetchGames]);

    const filteredGames =
        selectedTab === "start"
            ? games
            : games.filter((game) => game.categoryId === selectedTab);

    return (
        <div className="">
            <Navigation
                selectedNav={selectedTab}
                setSelectedNav={setSelectedTab}
            />
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                    {isLoading ? (
                        <>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <Skeleton key={index} className="aspect-square rounded-2xl bg-custom-gray" />
                            ))}
                        </>
                    ) : 
                        <>
                            {filteredGames.map((game) => (
                                <div key={game.id} className="relative aspect-square overflow-hidden rounded-2xl">
                                    {/* Favorite Icon */}
                                    <Icon
                                        name="favorite"
                                        stroke={game.isFavorite ? "#facc15" : "white"}
                                        className={`absolute top-1.5 right-[3px] cursor-pointer md:top-1.5 md:right-1 lg:top-2 lg:right-1.5 z-10 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
                                            game.isFavorite ? "text-yellow-400" : "text-transparent"
                                        }`}
                                        onClick={() => toggleFavorite(game.id)}
                                    />
                                    {/* Favorite Mask Icon */}
                                    <Icon
                                        name="favorite-mask"
                                        className="absolute top-0 right-0 z-0 opacity-80 rounded-tr-xl lg:rounded-tr-3xl"
                                        style={{
                                            width: "clamp(40px, 6vw, 60px)",
                                            height: "clamp(40px, 6vw, 60px)",
                                        }}
                                    />
                                    {/* Game Image */}
                                    <img
                                        src={game.img}
                                        alt={game.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            ))}
                        </>  
                    }
                </div>  

                {!isLoading && filteredGames.length === 0 && (
                    <div className="flex flex-1 items-center justify-center text-center text-gray-500 mt-4">
                        No games found for this category.
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
