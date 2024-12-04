import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "@/components/shared/ProductCard";
import FilterSidebar from "@/pages/Products/FilterSidebar";
import { pro_1, category_3, product_1 } from "@/assets/index";
import Pagination from "@/components/shared/Pagination";
import { DrawerDemo } from "@/components/shared/Drawer";
import NavigationBar from "@/components/shared/NavigationBar";

const mockProducts = [
    {
        id: 1,
        name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.",
        category: "mobiles",
        price: 3000,
        image: pro_1,
        originalPrice: "7000ج",
        rating: "4.2/5",
    },
    {
        id: 2,
        name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        category: "mobiles",
        price: 2000,
        image: category_3,
        originalPrice: "7000ج",
        rating: "4.2/5",
    },
    {
        id: 3,
        name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        category: "mobiles",
        price: 1500,
        image: product_1,
        originalPrice: "7000ج",
        rating: "4.2/5",
    },

];

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category") || "";
    const minPrice = parseFloat(searchParams.get("minPrice")) || 0;
    const maxPrice = parseFloat(searchParams.get("maxPrice")) || Infinity;

    useEffect(() => {
        const filtered = mockProducts.filter((product) => {
            return (
                (category ? product.category === category : true) &&
                product.price >= minPrice &&
                product.price <= maxPrice
            );
        });
        setFilteredProducts(filtered);
    }, [category, minPrice, maxPrice]);

    return (
        <>
            <NavigationBar />
            <div className="container mx-auto flex flex-col sm:flex-row md:flex-row my-4">
                <FilterSidebar setSearchParams={setSearchParams} mobile={true} />
                <div className="flex flex-col flex-wrap w-full p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl">قائمة المنتجات <span className="text-sm text-text_gray">(230)</span></h1>
                        <h3 className="hidden lg:block"><span className="text-sm ml-1 text-text_gray">ترتيب حسب </span><select name="" id="" className="text-sm text-text_gray border rounded-md px-2 py-1"> <option value="">الاعلي تقييماً</option></select></h3>
                        <DrawerDemo setSearchParams={setSearchParams} />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        {filteredProducts.length ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className="col-span-full text-center">No products found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
};

export default Products;
