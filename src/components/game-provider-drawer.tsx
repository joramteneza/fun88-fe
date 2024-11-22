"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer";
import Icon from "./common/icon";
import { useGamesStore } from "../store";
import { Skeleton } from "./ui/skeleton";

export function GameProviderDrawer() {
    const { providers, isProviderLoading: isLoading, fetchProviders, toggleProviderSelection, selectedProviders } =
        useGamesStore();

    useEffect(() => {
        fetchProviders(); // Fetch providers on component mount
    }, [fetchProviders]);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="flex items-center justify-center cursor-pointer p-2 border border-custom-gray rounded-lg border-opacity-35">
                    <Icon name="filter" className="ml-0.5 pt-0.5 text-custom-gray" />
                </div>
            </DrawerTrigger>
            <DrawerContent className="border-none">
                <DrawerHeader className="border-b px-4 py-0 bg-brightBlue h-12">
                    <div className="flex items-center justify-between">
                        <DrawerTitle className="flex items-center gap-2 text-white">
                            <Icon name="filter" className="" />
                            Game Providers
                            <span className="rounded-full border border-white px-4 py-0.5 text-xs">
                                {providers.length}
                            </span>
                        </DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <X className="h-4 w-4 text-white" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <ScrollArea className="h-[50vh] md:h-[60vh] bg-white">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {isLoading ? 
                        <>
                          {Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} className="h-16 rounded-2xl bg-custom-gray" />
                          ))}
                        </>
                      : 
                        <>
                          {providers.map((provider) => (
                            <button
                                key={provider.id}
                                onClick={() => toggleProviderSelection(provider.id)} // Toggle provider selection
                                className={`flex h-16 items-center justify-center rounded-lg px-4 py-2 bg-blue-50 ${
                                    selectedProviders.includes(provider.id)
                                        ? "border-2 border-brightBlue text-primary-foreground"
                                        : "bg-muted/50 hover:bg-muted"
                                }`}
                            >
                                <img
                                    src={provider.img}
                                    alt={provider.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </button>
                          ))}
                        </>
                      }

                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}
