import { category_3 } from "@/assets/index";
import QuantityControl from "./QuelityButton";

const CartItem = ({ hasDelete, hasCount }) => {
    return (
        <div className="w-full p-4 border-b border-t border-gray-200">
            <div className="flex items-start gap-4 relative">
                <div className="flex gap-4">
                    <img
                        src={category_3}
                        alt="Product"
                        loading="lazy"
                        className="w-24 h-24 object-cover bg-gray-200 rounded-xl"
                    />
                    <div className="flex flex-col">
                        <div className="text-sm font-semibold text-sec mb-5">
                            آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                        </div>
                        <div className="flex flex-col text-left text-gray-500 absolute left-0 top-1/2 -translate-y-1/2">
                            <span className="text-base font-semibold text-gray-800">6500ج</span>
                            <span className="line-through text-sm">7000ج</span>
                        </div>
                        {hasCount && (
                            <div>
                                <QuantityControl hasDelete={hasDelete} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
