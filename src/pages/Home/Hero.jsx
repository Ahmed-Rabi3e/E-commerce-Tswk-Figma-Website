import { FaStar } from "react-icons/fa";
import { hero } from "@/assets/index";
const Hero = () => {
    return (
        <section className="relative bg-third py-16 lg:py-28 overflow-hidden w-full h-[717px] flex rounded-lg">
            {/* Circles */}
            <div
                className="bg-transparent w-[635px] h-[680px] rounded-full border-[60px] border-[#EAEDFF] absolute -top-60 -left-40"
            />
            <div
                className="bg-transparent w-[635px] h-[680px] rounded-full border-[60px] border-[#EAEDFF] absolute bottom-[-480px] -right-60"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="w-full lg:w-[35%] text-center lg:text-right z-50">
                    <p className="text-main font-medium text-sm lg:text-base mb-3 flex items-center justify-center lg:justify-start">
                        <span className="text-main px-3 py-1 font-bold flex items-center gap-2">
                            <span className="bg-main rounded-full p-1"><FaStar className="fill-third" size={10} /></span>
                            من أفضل منتجات هذا الشهر
                        </span>
                    </p>
                    <h1 className="text-lg lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug lg:leading-relaxed mb-4">
                        تشكيلة من سماعات الرأس اللاسلكية للألعاب
                    </h1>
                    <p className="text-gray-500 text-sm lg:text-md xl:text-lg mb-6 leading-relaxed">
                        تمتع بأفضل تشكيلة جديدة وحصرية من سماعات الرأس اللاسلكية للألعاب.
                        عروض وخصومات في انتظارك.
                    </p>
                    <button className="bg-main hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        اطلب الآن
                    </button>
                </div>

                {/* Product Image */}
                <div className="w-full lg:w-[65%] flex justify-start z-50">
                    <img
                        loading="lazy"
                        src={hero}
                        alt="Gaming Headphones"
                        className="w-[500px] lg:w-[600px] xl:w-[900px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
