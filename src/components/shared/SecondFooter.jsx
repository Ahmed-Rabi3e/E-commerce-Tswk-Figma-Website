
const SecondFooter = () => {
    return (
        <footer className="px-4 bg-[#141D2E] py-4 flex justify-between">
            <div className="flex justify-center gap-4 underline text-sm text-gray-400">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
            </div>
            <div className="text-center text-gray-400 text-sm">
                <p className='flex flex-row-reverse justify-center'><span>© {new Date().getFullYear()}</span>Tasawq. All rights reserved</p>
            </div>
        </footer>
    )
}

export default SecondFooter