import { Link } from "react-router-dom";
import { faild } from "@/assets/index";

const PaymentFaild = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-10">
            <div className="text-center">
                <img
                    src={faild}
                    alt="Payment Failed"
                    loading="lazy"
                    className="w-48 lg:w-[340px] h-48 lg:h-[320px] mx-auto mb-4"
                />
                <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-sec">
                    لم تتم عملية الدفع بنجاح!
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2">
                    لقد فشلت عملية الدفع, يرجي المحاولة مرة اخري.
                </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4 font-din_bold text-sm sm:text-base md:text-lg mt-8">
                <Link
                    to="/checkout"
                    className="w-full sm:w-auto text-center bg-main text-white px-6 py-3 rounded-3xl shadow hover:bg-main/50 transition">
                    العودة الي الدفع
                </Link>
                <Link
                    to="/"
                    className="w-full sm:w-auto text-center bg-gray-300 text-main px-6 py-3 rounded-3xl shadow hover:bg-gray-400 transition">
                    العودة إلى الصفحة الرئيسية
                </Link>
            </div>
        </div>
    );
};

export default PaymentFaild;
