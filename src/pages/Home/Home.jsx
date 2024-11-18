import Hero from "@/pages/Home/Hero"
import Features from "./Feature"
import Carousel from "@/components/shared/Carousel"
import Categories from "./Categories"
import Offers from "./Offers"

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Features />
            <Carousel head="خصم لفترة محدودة" hasCount />
            <Categories />
            <Carousel head="أفضل المبيعات" />
            <Offers />
        </div>
    )
}

export default Home