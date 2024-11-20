import { FaCartShopping } from "react-icons/fa6";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link
            className="relative border rounded-lg p-4 flex flex-col cursor-pointer shadow-lg"
            to={`/products/${product.id}`}
        >
            <img src={product.image} alt={product.name} className="w-60 h-44 object-contain mb-4 mx-auto" />
            <h2 className="font-semibold text-lg">{product.name}</h2>
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
            <button className="absolute top-1/2 left-4 bg-main text-white p-2 rounded-md hover:bg-main/75 transition">
                <FaCartShopping />
            </button>
        </Link>
    );
};

export default ProductCard;
