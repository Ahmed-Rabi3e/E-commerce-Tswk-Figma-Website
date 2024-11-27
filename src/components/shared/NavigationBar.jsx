import { Link, useLocation, useParams } from "react-router-dom";

const NavigationBar = ({ productName }) => {
    const location = useLocation();
    const { id } = useParams(); 
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbItems = [
        { name: "الصفحة الرئيسية", path: "/" },
        ...pathnames.map((segment, index) => {
            const path = `/${pathnames.slice(0, index + 1).join("/")}`;
            let name = segment;

            switch (path) {
                case "/products":
                    name = "منتجاتنا";
                    break;
                case "/contact":
                    name = "اتصل بنا";
                    break;
                case "/about":
                    name = "معلومات عنا";
                    break;
                default:
                    // If the segment is dynamic (e.g., a product), use productName or the ID
                    if (path.includes("/product") && index > 0) {
                        name = productName || `منتج ${id}`;
                    }
                    break;
            }

            return { name, path };
        }),
    ];

    return (
        <nav className="bg-gray-100 py-2 pr-14 w-full">
            <ol className="flex items-center text-sm text-sec">
                {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;

                    return (
                        <li
                            key={index}
                            className={`flex items-center ${isLast
                                    ? "text-main font-bold"
                                    : "text-[#767676] hover:text-blue-500"
                                }`}
                        >
                            {!isLast ? (
                                <Link to={item.path}>{item.name}</Link>
                            ) : (
                                <span>{item.name}</span>
                            )}
                            {!isLast && <span className="mx-2">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default NavigationBar;
