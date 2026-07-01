import React from "react";
import assets from "../assets";
const menuItems = [
  { title: "Toptracer Range", link: "/" },
  { title: "Golf Lessons", link: "/" },
  { title: "Adventure Golf", link: "/" },
  { title: "Café", link: "/" },
  { title: "Events", link: "/" },
];




const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-between ">
        <div className="flex items-center uppercase gap-20 ">
          <div className="w-23">
            <img src={assets.logo} alt="Logo" />
          </div>
          <div>
            <nav>
              <ul className=" gap-10 flex items-center ">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-12 uppercase">
          <div className="header-button">
            <a>Book Range</a>
          </div>
          <div className="header-button">
            <a>Book Golf</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
