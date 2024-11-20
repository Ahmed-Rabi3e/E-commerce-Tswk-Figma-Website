import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="bg-gray-100 py-2 px-4">
            <div className="container flex items-center text-sm text-sec">
                {/* Home Link */}
                <Link to="/" className="hover:text-blue-500">
                    الصفحة الرئيسية
                </Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <div key={index} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-main font-bold">{name}</span>
                            ) : (
                                <Link to={routeTo} className="hover:text-blue-500">
                                    {name}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationBar;
