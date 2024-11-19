import { category_3 } from "@/assets/index";
import QuantityControl from "./QuelityButton";

const CartItem = () => {
    return (
        <div className="w-full p-4 border-b border-t border-gray-200">
            {/* Item Details */}
            <div className="flex items-start gap-4">
                <div className="flex gap-4">
                    <img
                        src={category_3}
                        alt="Product"
                        className="w-24 h-24 object-cover bg-gray-200 rounded-xl"
                    />
                    {/* Text Details */}
                    <div className="flex flex-col relative">
                        <p className="text-sm font-semibold text-sec">
                            آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                        </p>
                        <div className="flex flex-col text-left text-gray-500 absolute top-1/2 -translate-y-1/2 left-0">
                            <span className="text-base font-semibold text-gray-800">
                                6500ج
                            </span>
                            <span className="line-through text-sm">7000ج</span>
                        </div>
                        <div>
                            <QuantityControl hasDelete={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
