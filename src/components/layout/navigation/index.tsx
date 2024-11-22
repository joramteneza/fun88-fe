import Icon from '../../common/icon'
import { navigation } from '../../../api/mockData'
import { useGamesStore } from '../../../store';
import { useCallback, useState } from 'react';
import { debounce } from '../../../lib/utils';
import { GameProviderDrawer } from '../../../components/game-provider-drawer';

type NavigationProps = {
    selectedNav: string;
    setSelectedNav: (nav: string) => void;
};

export const Navigation: React.FC<NavigationProps> = ({ selectedNav, setSelectedNav }) => {
    const { setSearchQuery, toggleSearch, isSearchActive } = useGamesStore();
    const [localSearchQuery, setLocalSearchQuery] = useState("");

    const debouncedSetSearchQuery = useCallback(
        debounce((value: string) => {
            setSearchQuery(value); 
        }, 300),
        [setSearchQuery]
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalSearchQuery(value);
        debouncedSetSearchQuery(value);
    };
        
    return (
        <div className="sticky top-[64px] z-50 bg-white">
            <nav className="overflow-x-auto scrollbar-hide border-y">
                <div className="relative flex justify-between min-w-max items-center">
                    <div
                        onClick={() => toggleSearch()}
                        className={`sticky left-0 z-10 bg-white border-r flex flex-col items-center gap-1 p-4 min-w-[100px] cursor-pointer hover:text-brightBlue ${isSearchActive ? "text-brightBlue font-medium" : "text-custom-gray"
                            }`}
                    >
                        <Icon name="search" className="w-6 h-6" />
                        <span className={`text-sm ${isSearchActive && "underline"}`}>SEARCH</span>
                    </div>
                    {navigation.map((item, index) => (
                        <a
                            key={index}
                            className={`flex flex-col items-center gap-1 p-4 min-w-[100px] cursor-pointer hover:bg-blue-50 ${selectedNav === item.name ? "bg-blue-50 text-brightBlue underline font-medium" : "text-custom-gray"
                                }`}
                            onClick={() => setSelectedNav(item.name)}
                        >
                            <Icon name={item.name} className="w-6 h-6" />
                            <span className="text-sm">{item.label}</span>
                        </a>
                    ))}
                </div>
            </nav>
            {isSearchActive &&
                <div className="flex p-4 gap-3">
                    <div className="relative w-full">
                            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                value={localSearchQuery}
                                onChange={handleSearchChange}
                                type="text"
                                placeholder="Search games"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-brightBlue"
                            />
                    </div>
                    <GameProviderDrawer />
                </div>
            }
        </div>
    )
}