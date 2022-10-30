const Header = () => {
    return (
        <header className="header h-10 px-4 flex justify-between">
            <div className="flex items-center">
                <img src="./images/main_logo.svg" width={30} className="mr-2" />
                <p className="font-semibold text-lg">VLHotels<span className="text-xs">™</span></p>
            </div>
            <div className="flex items-center">
                <img src="./icons/user.svg" width={20} />
            </div>
        </header>
    )
}

export default Header;