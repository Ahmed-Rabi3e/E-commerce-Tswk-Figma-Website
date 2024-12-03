import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const ProductCard = ({ product }) => {
    return (
        <div
            className="relative border rounded-lg p-4 flex flex-col shadow-sm"
        >
            <Link
                to={`/products/${product.id}`}
            >
                <img src={product.image} loading="lazy" alt={product.name} className="w-60 h-44 object-contain mb-4 mx-auto" />
                <h2 className="text-xl truncate">{product.name}</h2>
            </Link>
            <div className="text-red-500 flex items-center justify-between">
                <div>
                    <span className="font-bold text-xl">{product.originalPrice}</span>
                    <span className="line-through text-gray-400 text-sm mx-2">
                        {product.price}
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-gray-600">{product.rating}</span>{" "}
                    <HiStar className="fill-yellow-500" />
                </div>
            </div>
            <div className="absolute top-1/2 translate-y-4 px-1 pt-1 left-2 bg-main text-white rounded-md hover:bg-main/75 transition">
                <Cart color={true} />
            </div>
        </div>

    );
};

export default ProductCard;
