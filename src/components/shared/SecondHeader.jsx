import { logo } from "@/assets/index";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";

const SecondHeader = () => {
    return (
        <header className="flex justify-between items-center p-6 shadow-md">
            <div>
                <span className="flex items-center gap-2">
                    <IoShieldCheckmarkOutline className="text-main text-2xl" />
                    <span className="text-sec font-semibold">دفع آمن</span>
                </span>
            </div>
            <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="Logo"
                    loading="lazy"
                    className="w-10 h-10"
                />
                <span className="text-3xl font-bold text-sec">تسوق</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                    <LuMessagesSquare className="text-main text-2xl" />
                    <span className="text-sec font-semibold hidden lg:block"> الدعم الفني</span>
                </span>
                <span className="flex items-center gap-2">
                    <TbPhoneCall className="text-main text-2xl" />
                    <span className="text-sec font-semibold hidden lg:block">546841</span>
                </span>
            </div>

        </header>
    )
}

export default SecondHeader