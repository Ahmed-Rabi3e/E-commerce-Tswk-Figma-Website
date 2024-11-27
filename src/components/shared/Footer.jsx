import { useState } from 'react';
import { logo } from '@/assets/index'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <footer className="bg-[#141D2E] text-white pt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Company */}
                    <div className="text-center md:text-right">
                        <div className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Logo"
                                loading="lazy"
                                className="w-10 h-10"
                            />
                            <span className="text-3xl font-bold text-white">تسوق</span>
                        </div>
                        <p className="text-gray-400 my-4 text-right">
                            منتجات إلكترونية أنيقة ذات جودة ممتازة تناسب كل فرد من أفراد الأسرة. وبأسعار جد معقولة
                        </p>
                        <div className="hidden md:flex lg:flex gap-4">
                            <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                className="text-white hover:text-blue-600 bg-zinc-600  p-1 rounded"
                            >
                                <FaLinkedin size={24} />
                            </Link>
                            <Link
                                to="https://www.x.com"
                                target="_blank"
                                className="text-white hover:text-black bg-zinc-600 p-1 rounded"
                            >
                                <FaTwitter size={24} />
                            </Link>
                            <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                className="text-white hover:text-pink-500 bg-zinc-600 p-1 rounded"
                            >
                                <FaInstagram size={24} />
                            </Link>
                            <Link
                                to="https://www.facebook.com"
                                target="_blank"
                                className="text-white hover:text-blue-500 bg-zinc-600 p-1 rounded"
                            >
                                <FaFacebookF size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl text-right font-bold mb-4">تواصلوا معنا</h3>
                        <div className="text-gray-400 text-right flex flex-col sm:flex">
                            <div className='flex items-center gap-2'>
                                <CiMail size={25} />
                                <p className='text-lg'>البريد الإلكتروني</p>
                            </div>
                            <div className='text-lg sm:text-sm'>tasawaqonline@gmail.com</div>
                        </div>
                        <div className="text-gray-400 mt-2">
                            <div className='flex items-center gap-2'>
                                <FiPhoneCall size={20} />
                                <p className='text-lg'>اتصل بنا</p>
                            </div>
                            <p className='text-lg flex flex-row-reverse justify-end gap-2'>+<span>966</span> <span>5643</span> <span>56688</span></p>
                        </div>
                    </div>

                    {/* Column 3: Subscribe */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold text-right mb-4">اشترك معنا ليصلك اخر العروض والخصومات والحصول عليي خصم 15%</h3>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ادخل بريدك الإلكتروني"
                                required
                                className="w-full lg:w-[362px] px-4 py-2 rounded-3xl outline-none text-gray-700"
                            />
                            <button
                                type="submit"
                                className="bg-main text-white px-6 py-2 rounded-3xl hover:bg-main/75"
                            >
                                اشترك
                            </button>
                        </form>
                    </div>
                </div>
                {/* Small Screen Social  */}
                <div className="flex justify-center pt-10 sm:hidden gap-4">
                    <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        className="text-white hover:text-blue-600 bg-zinc-600  p-1 rounded"
                    >
                        <FaLinkedin size={24} />
                    </Link>
                    <Link
                        to="https://www.x.com"
                        target="_blank"
                        className="text-white hover:text-black bg-zinc-600 p-1 rounded"
                    >
                        <FaTwitter size={24} />
                    </Link>
                    <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        className="text-white hover:text-pink-500 bg-zinc-600 p-1 rounded"
                    >
                        <FaInstagram size={24} />
                    </Link>
                    <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        className="text-white hover:text-blue-500 bg-zinc-600 p-1 rounded"
                    >
                        <FaFacebookF size={24} />
                    </Link>
                </div>
            </div>
            <div className="text-center mt-32 py-4 text-gray-400 text-sm border-t border-gray-500">
                <p className='flex flex-row-reverse justify-center'><span>© {new Date().getFullYear()}</span>Tasawq. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
