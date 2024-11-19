import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItems";

const Cart = () => {
    return (
        <div className="text-gray-600 hover:text-main mt-2">
            <Sheet>
                <SheetTrigger>
                    <FiShoppingCart size={22} />
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex justify-between items-center">
                        {/* Title */}
                        <div className="flex gap-4 items-center">
                            <SheetTitle className="text-3xl">السلة <span className="text-2xl font-normal">(1)</span></SheetTitle>
                        </div>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-full focus:outline-none"
                            onClick={() => document.querySelector('[data-state="open"]').click()}
                        >
                            <MdClose size={20} />
                        </button>
                    </div>
                    <SheetDescription className="mt-4">
                        <CartItem />
                        {/* Total Price & Actions */}
                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row items-center sm:justify-between pt-4">
                                <p className="text-base md:text-lg font-semibold text-gray-800">
                                    إجمالي السلة:
                                </p>
                                <p className="text-base md:text-lg font-bold text-gray-800">6500ج</p>
                            </div>
                            <div className="w-full flex justify-center gap-2 mt-4">
                                <button className="px-12 py-2 text-white bg-main rounded-3xl hover:bg-main/80">
                                    إتمام الشراء
                                </button>
                                <button className="px-12 py-2 text-main border border-main rounded-3xl hover:bg-main/10">
                                    متابعة التسوق
                                </button>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Cart;
