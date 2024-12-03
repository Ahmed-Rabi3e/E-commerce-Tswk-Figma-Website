import {
    feature_1,
    feature_2,
    feature_3,
    feature_4,
} from "@/assets";


const FeaturesCheckout = () => {
    const features = [
        { id: 1, icon: feature_1, text: "خدمة العملاء" },
        { id: 2, icon: feature_2, text: "الدفع عند الاستلام" },
        { id: 3, icon: feature_3, text: "عروض وخصومات" },
        { id: 4, icon: feature_4, text: "توصيل مجاني" },
    ];

    return (
        <section className="py-8 bg-white">
            <div className="mx-auto flex justify-center items-center gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col items-center justify-center"
                    >
                        <img src={feature.icon} alt="feature icon" className="w-16 lg:w-20 h-16 lg:h-20 bg-blue-50 rounded-full p-3" />
                        <p className="text-base font-bold text-gray-600 mt-2 text-center">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesCheckout;
