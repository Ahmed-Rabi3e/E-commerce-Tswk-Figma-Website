import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItems";
import { cart_icon, cart_icon_balck } from "@/assets/index";

const Cart = ({ color }) => {
    return (
        <div className={`text-gray-600`}>
            <Sheet>
                <SheetTrigger>
                    {color ? <img src={cart_icon} alt="shopping-icon" /> : <img src={cart_icon_balck} alt="shopping-icon" />}
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex justify-between items-center font-din">
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
                        <CartItem hasDelete={true} />
                        {/* Total Price & Actions */}
                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row items-center sm:justify-between pt-4">
                                <p className="text-base md:text-lg font-semibold text-gray-800">
                                    إجمالي السلة:
                                </p>
                                <p className="text-base md:text-lg font-bold text-gray-800">6500ج</p>
                            </div>
                            <div className="flex justify-center text-sm gap-4 mt-4">
                                <button className="px-6 py-2 w-full text-white bg-main rounded-3xl hover:bg-main/80">
                                    إتمام الشراء
                                </button>
                                <button className="px-6 py-2 w-full text-main border border-main rounded-3xl hover:bg-main/10">
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
