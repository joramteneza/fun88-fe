import Icon from '../../common/icon'
import { navigation } from '../../../api/mockData'

type NavigationProps = {
    selectedNav: string;
    setSelectedNav: (nav: string) => void;
};

export const Navigation: React.FC<NavigationProps> = ({ selectedNav, setSelectedNav }) => {
    return (
        <div className="bg-white">
            <nav className="overflow-x-auto scrollbar-hide border-y">
                <div className="relative flex justify-between min-w-max items-center">
                    <div
                        onClick={() => setSelectedNav("search")}
                        className={`sticky top-0 z-10  flex flex-col items-center gap-1 p-4 min-w-[100px] cursor-pointer hover:bg-blue-50 ${selectedNav === "search" ? "bg-blue-50 text-brightBlue font-medium" : "text-custom-gray"
                            }`}
                    >
                        <Icon name="search" className="w-6 h-6" />
                        <span className={`text-sm ${selectedNav === "search" && "underline"}`}>SEARCH</span>
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
            {selectedNav === "search" &&
                <>
                    <div className="p-4">
                        <div className="relative">
                            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search games"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="p-4 text-center text-gray-500">No games found</div></>
            }

        </div>
    )
}