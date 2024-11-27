import Heading from "@/components/shared/Heading";
import { MarqueeDemo } from "./Reviews";
import Carousel from "@/components/shared/Carousel";
import Rating from "@/components/shared/Rating";

const ratingsData = {
    5: 60,
    4: 34,
    3: 4,
    2: 2,
    1: 0,
};

const Testmoniails = () => {
    return (
        <div className="my-20">
            <Heading label="تقييمات عملائنا" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-right md:w-1/2">
                    <p className="mb-4">بعض من تقيمات عملائنا عن هذا المنتج. اطلب الان واكتب تقييمك</p>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md mb-8">اكتب تقييمك</button>
                </div>
                <Rating ratings={ratingsData}/>
            </div>
            <MarqueeDemo />
            <Carousel head="منتجات مشابهه" />
        </div>
    );
};

export default Testmoniails;
