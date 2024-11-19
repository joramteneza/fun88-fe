import React from "react";
import Header from "./components/layout/header";
import { CarouselBanner } from "./components/layout/carousel";


interface ComponentProps {
    children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header />
            <CarouselBanner />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
