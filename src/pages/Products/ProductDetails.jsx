import { category_3, pro_1, product_1 } from "@/assets";
import FAQDetails from "@/components/shared/FAQDetails";
import ImageSlider from "@/components/shared/ImageSlider";
import InputWithIcon from "@/components/shared/InputComponent";
import NavigationBar from "@/components/shared/NavigationBar";
import ProductOption from "@/components/shared/ProductOptions";
import QuantityControl from "@/components/shared/QuelityButton";
import { useEffect, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineHeadsetMic, MdOutlinePayments } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import CustomRadioButtons from "./CustomRadio";
import Testmoniails from "./Testmoniails";
import VirticalRadio from "./VirticalRadio";

const mockProducts = [
    {
        id: 1,
        name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.",
        category: "mobiles",
        price: 3000,
        rating: 4.5,
        images: [pro_1, pro_1, pro_1, pro_1, pro_1],
    },
    {
        id: 2,
        name: "آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime ",
        category: "mobiles",
        price: 2000,
        rating: 4.2,
        images: [category_3, category_3, category_3, category_3, category_3],
    },
    {
        id: 3,
        name: "Tablet 1",
        category: "mobiles",
        price: 1500,
        rating: 4.1,
        images: [product_1, product_1, product_1, product_1, product_1],
    },
];

const productOptions = [
    {
        id: 1,
        title: "منتج واحد فقط",
        description: "احصل على الخصم الأفضل",
        price: "6500",
        originalPrice: "7000",
        isBestOffer: false,
    },
    {
        id: 2,
        title: "اشترِ 2 واحصل على خصم 10%",
        description: "وفر الآن مع العرض",
        price: "12000",
        originalPrice: "13000",
        isBestOffer: true,
    },
    {
        id: 3,
        title: "اشترِ 3 واحصل على خصم 15%",
        description: "وفر أكثر مع العرض",
        price: "18000",
        originalPrice: "19500",
        isBestOffer: false,
    },
];

const ProductDetails = () => {
    const [inputValue, setInputValue] = useState("");
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = mockProducts.find((p) => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [productId]);

    if (!product) {
        return <p className="text-center mt-4">Product not found</p>;
    }

    return (
        <>
            <NavigationBar productName={product.name} />
            <div className="mx-auto px-4 py-6">
                {/* Product Details */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image Slider Section */}
                    <div className="w-full lg:w-1/2 shadow-xl h-fit rounded-xl lg:sticky lg:top-0">
                        <ImageSlider images={product.images} />
                    </div>

                    {/* Product Details Section */}
                    <div className="w-full lg:w-1/2 shadow-xl p-4 rounded-xl">
                        <div className="flex items-center">
                            <HiStar className="fill-yellow-500 text-lg" />
                            <span className="ml-2 text-lg font-medium">{product.rating}</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl mb-4 font-bold">{product.name}</h1>

                        {/* Price Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                            <div>
                                <span className="font-bold text-2xl md:text-3xl text-sec">
                                    {product.price}ج
                                </span>
                                <span className="line-through text-gray-400 text-lg mx-2">
                                    {product.price}
                                </span>
                                <span className="text-sm bg-violet-200 text-main px-2 py-1 rounded-md">
                                    وفر 1000ج
                                </span>
                            </div>
                        </div>

                        {/* Options */}
                        <CustomRadioButtons
                            label="المساحة:"
                            queryKey="space"
                            options={["20x30", "30x40", "40x50", "50x60", "60x70"]}
                        />
                        <CustomRadioButtons
                            label="اللون:"
                            queryKey="color"
                            options={["رمادي", "سيلفر", "ازرق", "احمر", "بنفسجي"]}
                        />

                        {/* Add to Cart Section */}
                        <div className="flex flex-col md:flex-row items-center md:justify-start gap-8 mt-8">
                            <div className="flex items-center justify-center gap-2 text-white bg-sec px-6 py-2 rounded-3xl w-full md:w-2/3">
                                <p><FaShoppingCart /></p>
                                <span>اضف الي السلة</span>
                            </div>
                            <QuantityControl />
                        </div>

                        {/* Divider */}
                        <div className="w-full h-0.5 bg-gray-300 my-10 relative">
                            <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 px-2 bg-white text-gray-500">
                                أو
                            </span>
                        </div>

                        {/* Quick Order Form */}
                        <h1 className="flex items-center gap-3 bg-main bg-opacity-10 p-4 rounded">
                            <BsFillLightningChargeFill className="fill-main" />
                            <span>للطلب السريع يرجي إدخال البيانات المطلوبة:</span>
                        </h1>
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

                        {/* Offers */}
                        <h1 className="flex items-center gap-3 bg-main bg-opacity-10 p-4 rounded">
                            <BsFillLightningChargeFill className="fill-main" />
                            <span>عروض التوفير</span>
                        </h1>
                        <ProductOption options={productOptions} price={true} />
                        <div className="flex items-center justify-between px-4 pt-6">
                            <p className="text-base md:text-lg font-semibold text-gray-800">
                                إجمالي المبلغ:
                            </p>
                            <p className="text-base md:text-lg font-bold text-gray-800">6500ج</p>
                        </div>
                        <Link to='/checkout' className="w-full py-3 pb-4 text-xl rounded-3xl my-6 text-white bg-main px-6 flex justify-center items-center">اشتري الان - الدفع عند الاستلام</Link>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold">تفاصيل عن المنتج:</h3>
                            <p className="text-lg text-gray-500 my-4">
                                آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime - إصدار الشرق آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime - إصدار الشرق آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق FaceTime - إصدار الشرق الأوسط
                            </p>
                        </div>

                        <div className="border-2 m-6 rounded-3xl">
                            <FAQDetails
                                open={true}
                                label='سياسة الدفع عند الاستلام'
                                Icon={MdOutlinePayments}
                                description='تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل'
                            />
                            <FAQDetails
                                label='سياسة الشحن'
                                Icon={LiaShippingFastSolid}
                                description='تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل'
                            />
                            <FAQDetails
                                label='سياسة الاسترجاع'
                                Icon={RiArrowGoBackFill}
                                description='تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل'
                            />
                            <FAQDetails
                                label='خدمة العملاء'
                                Icon={MdOutlineHeadsetMic}
                                isLast={true}
                                description='تحتاج للإدلاء بعنوانك و معلومات الاتصال بك وكدا طريقة الدفع لتأكيد الطلب ثم سيتم ربط الاتصال بك عبر مكالمة هاتفية لتأكيد طلبك، بعد التأكد من الطلب سيتم الشحن في غضون 1-3 أيام عمل'
                            />
                        </div>
                    </div>
                </div>
                <Testmoniails />
            </div>
        </>
    );
};

export default ProductDetails;
