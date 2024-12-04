import InputWithIcon from "@/components/shared/InputComponent";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { TbInfoOctagon } from "react-icons/tb";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import CartItem from "@/components/shared/CartItems";
import { Link } from "react-router-dom";
import ProductOption from "@/components/shared/ProductOptions";
import {
    credit_1,
    credit_2,
    credit_3,
    credit_4,
} from "@/assets/index";
import FeaturesCheckout from "@/components/shared/FeaturesCheckout";

const Checkout = () => {
    const [inputValue, setInputValue] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [isValidCode, setIsValidCode] = useState(true);

    const handleDiscountChange = (e) => {
        setDiscountCode(e.target.value);
        setIsValidCode(e.target.value === "DISCOUNT10");
    };

    const productOptions = [
        {
            id: 1,
            title: "الدفع عند الاستلام",
            description: "احصل على الخصم الأفضل",
            price: "6500",
            originalPrice: "7000",
            img: credit_1,
            isBestOffer: false,
        },
        {
            id: 2,
            title: "بواسطة PayTabs",
            description: "وفر الآن مع العرض",
            price: "12000",
            originalPrice: "13000",
            img: credit_2,
            isBestOffer: false,
        },
        {
            id: 3,
            title: "بواسطة Paymob",
            description: "وفر أكثر مع العرض",
            price: "18000",
            originalPrice: "19500",
            img: credit_3,
            isBestOffer: false,
        },
        {
            id: 4,
            title: "بواسطة بطاقة الإتمئنان",
            description: "وفر أكثر مع العرض",
            price: "18000",
            originalPrice: "19500",
            img: credit_4,
            isBestOffer: false,
        },
    ];
    return (
        <main className="container mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer and Payment Details */}
            <div className="bg-white">
                {/* Customer Details */}
                <div className="mb-6 shadow-checkout p-4 lg:p-10 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-2">يرجى إدخال بياناتك الشخصية</h2>
                    <p className="text-gray-500 mb-4">قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.</p>
                    <InputWithIcon
                        label="الأسم الكامل"
                        placeholder="ادخل اسمك بالكامل"
                        icon={FaRegUser}
                        iconPosition="right"
                        showIcon={true}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <InputWithIcon
                        label="رقم الهاتف"
                        placeholder="ادخل رقم الهاتف الخاص بك"
                        icon={IoCallOutline}
                        iconPosition="right"
                        showIcon={true}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <InputWithIcon
                        label="العنوان"
                        placeholder="ادخل عنوانك بالتفصيل"
                        icon={CiLocationOn}
                        iconPosition="right"
                        showIcon={true}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>

                {/* Payment Method */}
                <div className="shadow-checkout p-4 lg:p-10 rounded-3xl">
                    <h2 className="text-xl font-bold mb-2">طريقة الدفع</h2>
                    <p className="text-gray-500 mb-4">قم باختيار طريقه الدفع المناسبة لك</p>
                    <ProductOption options={productOptions} price={false} />

                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-4 lg:p-10 rounded-3xl shadow-checkout h-fit">
                <h2 className="text-2xl font-bold mb-4">ملخص الطلب</h2>
                <CartItem hasCount={true} />

                {/* Discount Code */}
                <div className="mt-4">
                    {!isValidCode && (
                        <div className="flex items-center justify-between my-5 p-3 bg-red-100">
                            <div className="flex gap-2 items-center">
                                <TbInfoOctagon className="text-red-500 text-xl" />
                                <p className="text-sec text-xl">كود الخصم غير صالح.</p>
                            </div>
                            <div>
                                <MdClose className="text-sec text-xl" />
                            </div>
                        </div>
                    )}

                    <div className="flex gap-2 relative">
                        <input
                            type="text"
                            className="bg-gray-200 w-full px-10 py-3 rounded-lg text-xl outline-none"
                            placeholder="أدخل كود الخصم الخاص بك"
                            value={discountCode}
                            onChange={handleDiscountChange}
                        />
                        <HiOutlineTicket className="text-xl absolute top-1/2 -translate-y-1/2 right-2 text-gray-400" />
                        <button className="bg-main text-white px-10 py-2 rounded-3xl">
                            طبيق
                        </button>
                    </div>

                </div>

                {/* Summary Table */}
                <div className="mt-6 text-gray-500 text-lg flex flex-col gap-3">
                    <div className="flex justify-between">
                        <span>السلع</span>
                        <span>6500ج</span>
                    </div>
                    <div className="flex justify-between">
                        <span>مصاريف الشحن</span>
                        <span>00.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>كوبون الخصم</span>
                        <span>00.00</span>
                    </div>
                    <div className="flex justify-between font-bold text-sec text-lg border-t border-gray-200 pt-2">
                        <span>إجمالي المبلغ</span>
                        <span>6500ج</span>
                    </div>
                </div>

                <Link to='/checkout/paymentsuccess' className="w-full py-4 flex justify-center bg-main shadow-custom-blue text-white rounded-3xl text-2xl mt-6">
                    تأكيد الطلب
                </Link>
                <FeaturesCheckout />
            </div>
        </main>
    );
};

export default Checkout;
