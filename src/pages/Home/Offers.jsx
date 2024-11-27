import Heading from "@/components/shared/Heading";
import { Link } from "react-router-dom";
import { GoArrowUpLeft } from "react-icons/go";
import { offer_1, offer_2, offer_3, offer_4 } from '@/assets/index'

const offers = [
    {
        id: 1,
        title: "هواتف ذكية",
        discount: "خصم يصل حتى 30%",
        buttonText: "أطلب الآن",
        image: offer_1,
    },
    {
        id: 2,
        title: "شاشات ذكية",
        discount: "خصم يصل حتى 70%",
        buttonText: "أطلب الآن",
        image: offer_2,
    },
    {
        id: 3,
        title: "آيباد & تابلت",
        discount: "خصم يصل حتى 20%",
        buttonText: "أطلب الآن",
        image: offer_3,
    },
    {
        id: 4,
        title: "سماعات وايرلس",
        discount: "خصم يصل حتى 50%",
        buttonText: "أطلب الآن",
        image: offer_4,
    },
];

const Offers = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <Heading label='عروض خاصة' />

                <div className="flex overflow-x-auto gap-10 py-4 scrollbar-hide">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="flex flex-col bg-gray-100 rounded-lg p-4 w-80 h-96 flex-shrink-0"
                        >
                            <div>
                                <h1 className="text-3xl text-sec font-semibold">{offer.title}</h1>
                                <p className="text-text_gray text-lg">{offer.discount}</p>
                                <Link to='' className="text-main text-sm underline font-semibold flex items-center">
                                    {offer.buttonText}<GoArrowUpLeft />
                                </Link>
                            </div>
                            <img
                                src={offer.image}
                                alt={offer.label}
                                loading="lazy"
                                className="w-44 h-44 object-contain self-end"
                            />
                            <p className="mt-2 text-xl sm:text-base font-medium text-gray-700 text-center">
                                {offer.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
