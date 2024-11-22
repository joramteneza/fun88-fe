import Icon from "../../../components/common/icon";

const Header = () => {
    return (
        <header className="text-brightBlue p-4 sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex gap-1">
                    <button>
                        <Icon name="menu" className="mt-2 h-6 w-6" />
                    </button>
                    <img
                        src="/assets/logos/fun88.webp"
                        alt="Menu"
                        className="object-contain "
                    />
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center text-sm">
                        <Icon name="wallet" className="h-6 w-6 text-custom-gray" />
                        <span className="font-semibold text-lg">$1990.6</span>
                    </button>
                    <div className="h-8 w-[2px] mx-2 opacity-50 bg-gradient-to-b from-transparent via-brightBlue to-transparent"></div>
                    <button>
                        <Icon name="user" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;
