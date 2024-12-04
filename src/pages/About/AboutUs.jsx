import NavigationBar from "@/components/shared/NavigationBar";

const About = () => {
    return (
        <div className="">
            <NavigationBar />
            <div className="max-w-5xl mx-auto mt-4 py-10 px-4 sm:px-8">
                {/* Section: About */}
                <section className="text-right mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">عنّا</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        مرحبًا بك في سيروزا، علامة القهوة الرائدة التي أنشأتها GCP EG، حيث نكرّس جهودنا لتحببك مع القهوة. بدأت رحلة قهوة سيروزا
                        برؤية عميقة وبسيطة: تقديم النظارة والجودة غير المسبوقتين مباشرة إلى كوبك. تأسست سيروزا في مصر، وهي شهادتنا على الثقافة الغنية للقهوة التي أتقنّاها بالتزامنا في كل خطوة.
                    </p>
                </section>

                <section className="text-right mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">ما نقوم به:</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        في قهوة سيروزا، نحن متخصصون في توفير القهوة المطحونة حديثًا والمعبأة كل يوم. وعدنا هو تسليم قهوتك خلال 48 ساعة من الطلب،
                        لضمان أن كل رشفة تنسم بأقصى النكهات والعبير الذي تشتهر به حبوبنا. نحن نستورد فقط أجود الحبوب، مع اختبار دقيق وتحميصها لتحقيق ملف طعم غني ومكرر.
                    </p>
                </section>

                <section className="text-right mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">التزاماتنا:</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        نحن نقف وراء التزاماتنا بالنضارة، والسرعة، والجودة. كل دفعة من قهوة سيروزا مطحونة ومعبّدة بدرجات العناية. لضمان أنك تتلقى
                        الأفضل فقط، التزاماتنا بتوصيل طلبك خلال 48 ساعة هو شهادة على التزامنا برضاك. في سيروزا، نحن لا نبيع قهوة فقط: نحن نقدم تجربة- وعد يمنح ممتاز لا يتنازل أبدًا عن الطعم أو الجودة.
                    </p>
                </section>

                <section className="text-right mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">دعوتنا:</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        ندعوك حقًا لتكون جزءًا من تجربة قهوة سيروزا. استكشف النكهات التي تأتي مع اختيارنا. رضاك إلى قهوة استثنائية يبدأ هنا.
                    </p>
                </section>

                <section className="text-right">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">للاتصال بنا:</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
                        للاستفسارات، أو الاقتراحات، أو حتى لمشاركة لحظات قهوتك معنا، يرجى الاتصال بنا:
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold">البريد الإلكتروني:</span> info@serozacoffee.com
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold">الهاتف المحمول:</span> 201100608058+
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
