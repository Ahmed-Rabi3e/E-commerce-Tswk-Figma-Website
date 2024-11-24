import { rating } from "@/assets/index";
import Heading from "@/components/shared/Heading";
import { MarqueeDemo } from "./Reviews";
import Carousel from "@/components/shared/Carousel";

const Testmoniails = () => {
    return (
        <div className="my-20">
            <Heading label="تقييمات عملائنا" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-right md:w-1/2">
                    <p className="mb-4">بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك</p>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md">اكتب تقييمك</button>
                </div>
                <img
                    src={rating}
                    alt="rating"
                    loading="lazy"
                    className="w-[90%] md:w-[555px] h-[150px] object-contain mt-0 lg:-mt-10"
                />
            </div>
            <MarqueeDemo />
            <Carousel head="منتجات مشابهه" />
        </div>
    );
};

export default Testmoniails;
