import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
import Cart from "@/components/shared/Cart";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "الصفحة الرئيسية", path: "/" },
        { name: "منتجاتنا", path: "/products" },
        { name: "معلومات عنا", path: "/about" },
        { name: "تواصل معنا", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow-sm w-full z-10">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-sec hover:text-main"
                    >
                        {isMobileMenuOpen ? <TfiClose size={25} /> : <TfiMenuAlt size={25} />}
                    </button>
                    <img
                        src="src/assets/logo.png"
                        alt="Logo"
                        loading="lazy"
                        className="w-10 h-10"
                    />
                    <span className="text-3xl font-bold text-sec">تسوق</span>
                </div>

                <ul className="hidden lg:flex space-x-8 space-x-reverse">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-main text-lg font-semibold"
                                        : "text-text_gray text-lg hover:text-main pb-1"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    <button className="text-gray-600 hover:text-main">
                        <FiSearch size={22} />
                    </button>
                    <Cart />
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-third shadow-md w-full z-20">
                    <ul className="flex flex-col space-y-4 p-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-main text-lg font-semibold pb-1"
                                            : "text-gray-600 text-lg hover:text-main pb-1"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
