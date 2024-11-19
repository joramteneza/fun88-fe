const Header = () => {
    return (
        <header className="text-brightBlue p-4 sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <button>
                        <img
                            src="/assets/icons/three-bar.svg"
                            alt="Menu"
                            className="h-4 w-4"
                        />
                    </button>
                    <img
                        src="/assets/logos/fun88.webp"
                        alt="Menu"
                    />
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center text-sm gap-2">
                        <img
                            src="/assets/icons/wallet.svg"
                            alt="Wallet"
                        />
                        <span className="font-semibold text-lg">$1990.6</span>
                    </button>
                    <div className="h-8 w-[2px] mx-2 opacity-50 bg-gradient-to-b from-transparent via-brightBlue to-transparent"></div>
                    <button>
                        <img
                            src="/assets/icons/userhead.svg"
                            alt="User Profile"
                            className="h-6 w-6"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;
