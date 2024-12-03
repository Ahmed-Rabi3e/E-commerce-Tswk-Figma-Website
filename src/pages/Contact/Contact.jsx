const Contact = () => {
    return (
        <div className="px-4 sm:px-8">
            <div className="max-w-4xl mx-auto mt-4 py-10 ">
                {/* Section Title */}
                <section className="text-right">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">تواصل معنا</h2>
                    {/* Section Content */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        ندعوك لأن تكون جزءًا من تجربة قهوة سيروزا. استكشف النكهات، استمتع بالجودة، وتمتع بالراحة التي تأتي مع اختيار قهوة
                        سيروزا. رضاك إلى قهوة استثنائية يبدأ هنا.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        للاستفسارات، أو الاقتراحات، أو حتى لمشاركة لحظات قهوتك معنا، يرجى الاتصال بنا:
                    </p>
                    {/* Contact Details */}
                    <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <p className="mb-2">
                            <span className="font-semibold">البريد الإلكتروني:</span>{" "}
                            info@serozacoffee.com
                        </p>
                        <p>
                            <span className="font-semibold">الهاتف المحمول:</span>{" "}
                            201100608058+
                        </p>
                    </div>
                </section>
                {/* Footer */}
                <footer className="mt-8 text-right text-gray-500 text-sm sm:text-base">
                    انضم إلينا في سيروزا، حيث كل كوب هو قصة، وكل رشفة دعوة لاستكشاف عمق حرفية القهوة عالية الجودة.
                </footer>
            </div>
        </div>
    );
};

export default Contact;
