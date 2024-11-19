import React, { useEffect, useState } from "react";
import { fetchCarouselData } from "../../../api/mockApi";
import { CarouselSlide } from "../../../types";
import { Carousel } from "../../common/carousel";

export const CarouselBanner = () => {
    const [carouselData, setCarouselData] = useState<CarouselSlide[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCarouselData();
            setCarouselData(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-full p-4 flex flex-col gap-2">
            {isLoading ? (
                <div className="flex items-center justify-center h-80">
                    <span className="text-lg font-semibold text-gray-500">Loading...</span>
                </div>
            ) : carouselData.length > 0 ? (
                <Carousel>
                    {carouselData
                        .filter((data) => data.image)
                        .sort((a, b) => a.position - b.position)
                        .map((carousel) => (
                            <img
                                key={carousel.id}
                                src={carousel.image}
                                alt={carousel.alt}
                                className={`object-cover rounded-2xl w-full h-full ${carousel.id % 2 === 0 ? "filter sepia" : ""}`}
                            />
                        ))}
                </Carousel>
            ) : (
                <img
                    src={"/assets/images/carousel/banner.webp"}
                    alt="banner"
                    className="object-cover w-full"
                />

            )}
            <div className="flex gap-2 items-center">
                <img
                    src={"/assets/icons/bell.svg"}
                    alt="bell"
                />
                <span className="text-brightBlue text-sm">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
            </div>
        </div>
    );
};
