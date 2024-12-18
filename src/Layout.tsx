import React from "react";
import Header from "./components/layout/header";
import { CarouselBanner } from "./components/layout/carousel";
import Footer from "./components/layout/footer";


interface ComponentProps {
    children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
            <Header />
            <CarouselBanner />
            <div className="flex flex-col flex-grow">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
