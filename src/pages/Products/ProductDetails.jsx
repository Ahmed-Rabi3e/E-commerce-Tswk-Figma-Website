import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pro_1, category_3, product_1 } from "@/assets";
import NavigationBar from "@/components/shared/NavigationBar";

const mockProducts = [
    { id: 1, name: "Laptop 1", category: "mobiles", price: 3000, rating: 4.5, image: pro_1, description: "A powerful and lightweight laptop." },
    { id: 2, name: "Phone 1", category: "mobiles", price: 2000, rating: 4.2, image: category_3, description: "A smartphone with excellent features." },
    { id: 3, name: "Tablet 1", category: "mobiles", price: 1500, rating: 4.1, image: product_1, description: "A versatile and sleek tablet." },
];

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = mockProducts.find((p) => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [productId]);

    if (!product) {
        return <p className="text-center mt-4">Product not found.</p>;
    }

    return (
        <>
            <NavigationBar />
            <div className="mx-auto p-4">
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-lg font-semibold mb-2">Price: <span className="text-red-500">{product.price}ج</span></p>
                        <p className="text-lg font-semibold mb-2">Rating: <span>{product.rating} ★</span></p>
                        <p className="text-sm text-gray-500">Category: {product.category}</p>
                        <button
                            onClick={() => window.history.back()}
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Back to Products
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductDetails;
