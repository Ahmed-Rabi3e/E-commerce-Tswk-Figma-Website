import { Outlet } from 'react-router-dom';
import SecondHeader from '@/components/shared/SecondHeader';
import SecondFooter from '@/components/shared/SecondFooter';

const SecondLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-din">
            <SecondHeader />

            <main className="flex-grow container mx-auto">
                <Outlet />
            </main>

            <SecondFooter />
        </div>
    );
};

export default SecondLayout;
