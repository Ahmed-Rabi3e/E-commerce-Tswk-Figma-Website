import { category_3 } from "@/assets/index";
import QuiltyCartbutton from "./QuiltyCartbutton";

const CartItem = ({ hasDelete, hasCount, column, hasNotinagation }) => {
    return (
        <div className="w-full py-6 border-b border-t border-gray-200">
            <div className="flex gap-3 relative">
                <div className="flex-none w-20">
                    <img
                        src={category_3}
                        alt="Product"
                        loading="lazy"
                        className="w-24 h-24 object-contain bg-gray-200 rounded-xl"
                    />
                    {hasNotinagation && <span className="absolute -right-4 -top-4 text-2xl bg-gray-300 text-white z-10 font-din_bold rounded-full px-2 pt-0.5">1</span>}
                </div>
                <div className="flex flex-col flex-auto w-64">
                    <div className="text-sm font-semibold text-sec mb-5 mt-1">
                        آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
                    </div>
                    {hasCount && (<QuiltyCartbutton hasDelete={hasDelete} />)}
                </div>
                <div className={`${column ? "flex-col text-left" : "flex-row gap-2 items-center"} flex text-gray-500 self-center flex-auto w-20`}>
                    <span className="text-lg font-din_bold text-gray-800">6500ج</span>
                    <span className="line-through text-sm">7000ج</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
