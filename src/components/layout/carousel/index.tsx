import React, { useEffect, useState } from "react";
import { fetchCarouselData } from "../../../api/mockApi";
import { CarouselSlide } from "../../../types";
import { Carousel } from "../../common/carousel";
import Icon from "../../../components/common/icon";
import { Skeleton } from "../../../components/ui/skeleton";

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
                <div className="flex items-center justify-center">
                    <Skeleton className="h-48 w-full rounded-2xl bg-custom-gray" />
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
            <div className="flex items-center">
                <Icon name="bell" className="ml-3 mt-3 h-6 w-6 text-yellow-400" />
                <span className="text-brightBlue text-sm">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
            </div>
        </div>
    );
};
