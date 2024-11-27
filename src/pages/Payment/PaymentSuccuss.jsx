import { Link } from "react-router-dom";
import { succuss } from "@/assets/index";
import CartItem from "@/components/shared/CartItems";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Illustration and Message */}
      <div className="text-center">
        <img
          src={succuss}
          alt="Order Success"
          loading="lazy"
          className="w-48 mx-auto mb-2"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-sec">
          شكراً لك!
        </h1>
        <p className="text-lg sm:text-3xl my-2 font-semibold text-main">
          لقد تم تأكيد طلبك بنجاح!
        </p>
        <p className="text-gray-500 text-lg mt-4">
          لقد قمنا بإستلام طلبك وسيتم التواصل معك في أقرب وقت لاستلام طلبك.
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg w-[400px] lg:w-[660px] mt-6 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ملخص الطلب</h2>
        <CartItem />
        <div className="text-lg text-gray-500 space-y-1 mt-4 font-medium">
          <div className="flex justify-between">
            <p>الســـلع</p>
            <p className="font-medium">2500</p>
          </div>
          <div className="flex justify-between">
            <p>مصاريف الشحن</p>
            <p className="font-medium">0.00</p>
          </div>
          <div className="flex justify-between">
            <p>كوبون الخصم</p>
            <p className="font-medium">0.00</p>
          </div>
        </div>
        <div className="flex justify-between border-t pt-4 mt-4 text-lg font-bold text-gray-800">
          <p>إجمالي المبلغ</p>
          <p>2500 ج</p>
        </div>
      </div>

      <Link
        to="/"
        className="mt-8 bg-main text-white px-8 py-3 rounded-3xl shadow hover:bg-main/75 transition">
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default PaymentSuccess;
