import { feature_1, feature_2, feature_3, feature_4 } from "@/assets/index";

const features = [
    {
        id: 1,
        title: "توصيل مجاني",
        description: "طلبات حتى 1500ج",
        icon: feature_1,
    },
    {
        id: 2,
        title: "عروض وخصومات",
        description: "عروض وخصومات دائمة",
        icon: feature_2,
    },
    {
        id: 3,
        title: "الدفع عند الاستلام",
        description: "ميزة الدفع عند الاستلام",
        icon: feature_3,
    },
    {
        id: 4,
        title: "خدمة العملاء",
        description: "متوفرة 24/7",
        icon: feature_4,
    },
];

const Features = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 drop-shadow-md">
                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="relative flex justify-center py-6 px-4 bg-white"
                        >
                            <div className={`flex sm:flex lg:flex items-center gap-4 justify-center flex-wrap    
                                ${index !== features.length - 1
                                    ? "after:absolute after:w-[1px] after:h-14 after:bg-gray-300 after:left-0"
                                    : ""
                                }
                                `}>
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    loading="lazy"
                                    className="w-8 h-8 lg:w-11 lg:h-11"
                                />
                                <div>
                                    <h3 className="text-xs sm:text-lg font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 hidden sm:block lg:block">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
