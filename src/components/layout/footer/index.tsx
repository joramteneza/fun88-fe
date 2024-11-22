"use client";

import React, { useState } from "react";
import Icon from "../../../components/common/icon";
import { footerNav } from "../../../api/mockData";

const Footer = () => {
  const [activeItem, setActiveItem] = useState<string>("SPORTS"); 

  return (
    <footer className="sticky bottom-0 left-0 right-0 z-50 bg-white pt-1">
      <nav className="container">
        <ul className="grid h-16 grid-cols-5">
          {footerNav.map((item) => (
            <li key={item.label}>
              <div
                onClick={() => setActiveItem(item.label)} 
                className={`cursor-pointer flex h-full w-full flex-col items-center justify-center gap-0.5 transition-colors ${
                  activeItem === item.label ? "text-brightBlue" : "text-custom-gray"
                }`}
              >
                <div className={`${activeItem === item.label && "flex items-center justify-center rounded-full p-0.5 bg-gradient-to-tr from-brightBlue via-white to-brightBlue"}`}>
                  <div className="p-1 bg-white rounded-full">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                </div>

                <span className="text-[12px] font-medium">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
