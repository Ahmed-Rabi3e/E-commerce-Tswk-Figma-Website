import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pro_1, category_3, product_1 } from "@/assets";
import NavigationBar from "@/components/shared/NavigationBar";
import { HiStar } from "react-icons/hi";
import CustomRadioButtons from "./CustomRadio";
import { FaShoppingCart } from "react-icons/fa";
import QuantityControl from "@/components/shared/QuelityButton";

const mockProducts = [
    { id: 1, name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.", category: "mobiles", price: 3000, rating: 4.5, image: pro_1 },
    { id: 2, name: "Phone 1", category: "mobiles", price: 2000, rating: 4.2, image: category_3 },
    { id: 3, name: "Tablet 1", category: "mobiles", price: 1500, rating: 4.1, image: product_1 },
];

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = mockProducts.find((p) => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [productId]);

    if (!product) {
        return <p className="text-center mt-4">Product not found</p>;
    }

    return (
        <>
            <NavigationBar />
            <div className="mx-auto p-4">
                <div className="flex gap-6">
                    <div className="w-1/2 shadow-xl">
                        <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-1/2 shadow-xl p-4 rounded-xl">
                        <div className="flex items-center">
                            <HiStar className="fill-yellow-500" />
                        </div>
                        <h1 className="text-3xl mb-4">{product.name}</h1>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="font-bold text-3xl text-sec">{product.price}ج</span>
                                <span className="line-through text-gray-400 text-lg mx-2">
                                    {product.price}
                                </span>
                                <span className="text-sm bg-violet-200  text-main px-2 py-1 rounded-md">وفر 1000ج</span>
                            </div>
                        </div>
                        <CustomRadioButtons
                            label="المساحة:"
                            options={["20x30", "30x40", "40x50", "50x60", "60x70"]}
                        />
                        <CustomRadioButtons
                            label="اللون:"
                            options={["رمادي", "سيلفر", "ازرق", "احمر", "بنفسجي"]}
                        />
                        <div className="flex items-center flex-wrap gap-4">
                            <button className="flex items-center justify-center gap-2 text-white bg-sec px-6 w-2/3 py-2 rounded-3xl">
                                <span><FaShoppingCart /></span><span>اضف الي السلة</span>
                            </button>
                            <QuantityControl />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductDetails;
