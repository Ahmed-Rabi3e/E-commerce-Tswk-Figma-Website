import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { useEffect, useState } from 'react';
import SkeletonLoader from '@/components/shared/SkeletonLoader';
import NavigationBar from '@/components/shared/NavigationBar';

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-din">
            <Header />
            <NavigationBar />

            <main className="flex-grow container mx-auto">
                {isLoading ? <SkeletonLoader /> : <Outlet />}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
