import { useState } from 'react';
import { hotspots as hspots } from '../data';
import RoomModal from '../components/RoomModal';

const Home = ({openRoomModal}) => {
    const [ hotspots, setHotspots ] = useState(hspots);
    const [ hsExpanded, setHsExpanded ] = useState(false);


    const onRoomModalOpen = () => {
        openRoomModal();
    }

    return (
        <div className="home">
            <section className="border-b-2 md:bg-[url('../public/images/bg_1.jpg')] md:bg-center md:h-[500px]">
                <div className="container mx-auto px-4 py-2 md:py-5 md:flex md:flex-col md:justify-between md:h-full">
                    <h1 className="text-3xl font-bold md:hidden">Where to?</h1>
                    <div className="md:bg-white md:p-3 rounded-md">
                        <h1 className="hidden md:block text-3xl font-bold">Where to?</h1>
                        <form className="md:flex md:items-center">
                            <div className="row my-3 md:flex-1 md:px-1 relative">
                                <img src="./icons/search.svg"  className="absolute w-4 h-4 left-4 top-4 right-0 bottom-0" />
                                <input type="text" className="bg-slate-300 w-full h-12 px-10" placeholder="e.g. Dubai" />
                            </div>
                            <div className="row my-3 md:flex-1 md:px-1">
                                <input type="date" className="bg-slate-300 w-1/2 h-12 border-r-2 border-gray-200 px-3 cursor-pointer" />
                                <input type="date" className="bg-slate-300 w-1/2 h-12 px-3 cursor-pointer" />
                            </div>
                            <div className="row my-3 md:flex-1 md:px-1 relative bg-slate-300 h-12 flex items-center cursor-pointer border-3" onClick={onRoomModalOpen}>
                               <div className="iconWrapper mx-3">
                                    <img src="./icons/users.svg" className="w-5" />
                               </div>
                               <div className="textWrapper flex flex-col">
                                    <span className="text-xs font-bold">Guests</span>
                                    <p>1 room, 2 guests</p>
                               </div>
                            </div>
                            <button className="w-full md:w-32 px-1 md:mx-2 rounded-full h-12 text-white font-bold bg-slate-400 text-sm">SEARCH</button>
                        </form>
                    </div>
                    <div className="hidden md:flex md:bg-white/90 p-3 md:items-center md:rounded-md md:flex-wrap">
                        <div className="logos flex md:basis-[230px]">
                            <img src="./images/ad_logo_2.svg" />
                            <img src="./images/ad_logo_3.svg" className="h-10" />
                        </div>
                        <div className="flex">
                            <p className="text-sm">Experience the Maldives islands and discover a variety of extraordinary resorts.</p>
                        </div>
                        <div className="flex flex-1 justify-end">
                            <div className="btnWrapper">
                                <button className="border-2 border-gray-300 text-slate-400 h-10 w-32 font-bold rounded-full text-sm">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto py-2">
                    <h2 className="text-2xl font-bold ml-4">Find a place nearby</h2>
                    <div className="flex my-5 overflow-x-auto justify-between">
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/city_1.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Eilat</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/city_2.jpg" className="w-full h-auto max-h-[150px] object-cover"/>
                            <p className="font-bold">Jerusalem</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/city_3.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Tiberias</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/city_1.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Eilat</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink md ml-3">
                            <img src="./images/city_2.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Jerusalem</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3 mr-3">
                            <img src="./images/city_3.jpg" className="w-full h-auto max-h-[150px] object-cover"/>
                            <p className="font-bold">Tiberias</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto px-4 py-2">
                    <div className="my-2">
                        <h2 className="text-2xl font-bold">Picture-perfect spots from around the world</h2>
                        <p className="font-light">Check out some of our favorite unique stays</p>
                    </div>
                    <div className="flex flex-wrap">
                        {hotspots && hotspots
                        .filter((x, i) => hsExpanded ? i < hotspots.length : i < 4)    
                        .map((val, index) => index % 2 ? (
                            <div className="pl-2 w-1/2 md:w-1/4 mb-4">
                                <img src={`./images/${val.img}`} className="bg-slate-300 flex-shrink-0 bg-cover rounded bg-center h-auto w-full min-h-[150px]" />
                                <p className="font-bold">{val.location}</p>
                                <p>{val.country}</p>
                            </div>
                        ) : 
                        (
                            <div className="pr-2 w-1/2 md:w-1/4 mb-4">
                                <img src={`./images/${val.img}`} className="bg-slate-300 flex-shrink-0 bg-cover rounded bg-center h-auto w-full min-h-[150px]" />
                                <p className="font-bold">{val.location}</p>
                                <p>{val.country}</p>
                            </div>
                        ))}
                    </div>
                    <div className="btnWrapper flex justify-center">
                        {hsExpanded ? 
                            <button className="border-gray-200 border-2 h-14 w-32 rounded-full font-bold text-md" onClick={() => setHsExpanded(false)}>See Less</button>
                            : 
                            <button className="border-gray-200 border-2 h-14 w-32 rounded-full font-bold text-md" onClick={() => setHsExpanded(true)}>See More</button> 
                        }
                       
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto px-4 py-2">
                    <h2 className="text-2xl font-bold">Travel with confidence</h2>
                    <p className="my-5">Suspendisse in mi elit. Nunc a eleifend nibh, ut tempor lectus. Aenean ut metus porta, pellentesque est quis:</p>
                    <div className="px-2 font-light text-sm">
                        <div className="item flex items-center mb-3">
                            <div className="imgWrapper bg-slate-200 mr-2 p-2 rounded-full">
                                <img src="./icons/list_1.svg" height="45" width="60"/>
                            </div>
                            <div className="txtWrapper">
                                <p className="font-bold text-base">Official health standards</p>
                                <p>Vivamus rhoncus tincidunt feugiat. Proin at nibh eget massa. Pellentesque nec tempor.</p>
                            </div>
                        </div>
                        <div className="item flex items-center mb-3">
                            <div className="imgWrapper bg-slate-200 mr-2 p-2 rounded-full">
                                <img src="./icons/list_2.svg" height="40" width="35"/>
                            </div>
                            <div className="txtWrapper">
                                <p className="font-bold text-base">Official health standards</p>
                                <p>Vivamus rhoncus tincidunt feugiat. Proin at nibh eget.</p>
                            </div>
                        </div>
                        <div className="item flex items-center mb-3">
                            <div className="imgWrapper bg-slate-200 mr-2 p-2 rounded-full">
                                <img src="./icons/list_1.svg" height="45" width="60"/>
                            </div>
                            <div className="txtWrapper">
                                <p className="font-bold text-base">Official health standards</p>
                                <p>Vivamus rhoncus tincidunt feugiat. Proin at nibh eget massa. Pellentesque nec tempor.</p>
                            </div>
                        </div>
                        <div className="item flex items-center mb-3">
                            <div className="imgWrapper bg-slate-200 mr-2 p-2 rounded-full">
                                <img src="./icons/list_2.svg" height="40" width="35"/>
                            </div>
                            <div className="txtWrapper">
                                <p className="font-bold text-base">Official health standards</p>
                                <p>Vivamus rhoncus tincidunt feugiat. Proin at nibh eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2 md:hidden">
                <div className="container mx-auto px-4 py-2">
                    <div className="card px-1 py-2">
                        <div style={{backgroundImage: 'url(./images/ad_1.jpg)'}} className="h-60 bg-cover bg-center relative">
                            <div className="w-8 h-8 bg-slate-50 absolute left-2 top-2 rounded flex justify-center items-center">
                                <p className="text-sm font-bold">Ad</p>
                            </div>
                        </div>
                        <div className="p-3 border-gray-200 border-[0.5px] border-t-0">
                            <img src="./images/ad_logo_1.svg" width={60} height={60} />
                            <p className="font-bold">Visit our resort</p>
                            <p className="font-light">Proin dolor odio, aliquam vestibulum varius vitae, vulputate nec sapien.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto py-2">
                    <h2 className="text-2xl font-bold ml-4">We do more than just hotels...</h2>
                    <div className="flex my-5 overflow-x-auto justify-between">
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/hotel_alt_1.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Holiday Homes</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/hotel_alt_2.jpg" className="w-full h-auto max-h-[150px] object-cover"/>
                            <p className="font-bold">Apartments</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/hotel_alt_3.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Hotels</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3">
                            <img src="./images/city_1.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Eilat</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink md ml-3">
                            <img src="./images/city_2.jpg" className="w-full h-auto max-h-[150px] object-cover" />
                            <p className="font-bold">Jerusalem</p>
                        </div>
                        <div className="city flex flex-col flex-shrink-0 md:flex-shrink ml-3 mr-3">
                            <img src="./images/city_3.jpg" className="w-full h-auto max-h-[150px] object-cover"/>
                            <p className="font-bold">Tiberias</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto px-4 py-2 md:flex md:justify-center md:items-center">
                    <div className="imgWrapper flex justify-center mb-4 md:flex-col">
                        <img src="./images/gift_logo_2.svg" className="w-3/4 h-auto" />
                        <div className="hidden md:block">
                            <p className="text-xs font-light">*See terms and conditions</p>
                        </div>
                    </div>
                    <div className="txtWrapper">
                        <h3 className="font-semibold text-red-900 text-2xl">VLHotels<span className="font-thin">Rewards</span><span className="text-xs font-thin">™</span></h3>
                        <ul className="text-sm my-6 font-light">
                            <li className="flex mb-1 items-baseline">
                               <img src="./icons/check.svg" width="13" height="10" className="mr-1" />
                                <p><span className="font-bold">Unlock Secret Prices!</span> You could get 10% off</p> 
                            </li>
                            <li className="flex mb-1 items-baseline">
                               <img src="./icons/check.svg" width="13" height="10" className="mr-1" />
                                <p><span className="font-bold">Get One Reward Night*</span> for every 10 nights you stay <a href="#" className="text-blue-400 hover:underline">Find out more</a></p> 
                            </li>
                            <li className="flex mb-1 items-baseline">
                               <img src="./icons/check.svg" width="13" height="10" className="mr-1" />
                                <p><span className="font-bold">Rack up rewards</span> in over 1,000,000 properties worldwide</p> 
                            </li>
                        </ul>
                        <div className="btnWrapper mb-3">
                            <button className="rounded-full w-28 h-10 text-white font-bold bg-slate-400 text-sm">JOIN NOW</button>
                            <button className="w-28 h-10 font-bold text-sm text-slate-400">SIGN IN</button>
                        </div>
                        <div className="md:hidden">
                            <p className="text-xs font-light">*See terms and conditions</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b-2">
                <div className="container mx-auto py-2">
                    <h2 className="text-2xl font-bold ml-4">Start planning your next getaway...</h2>
                    <div className="flex my-5 overflow-x-auto justify-between">
                        <div className="mx-4">
                            <div className="mb-3">
                                <div className="bg-slate-300 w-[260px] h-36 flex-shrink-0 bg-cover rounded bg-center" style={{backgroundImage: 'url(./images/hotel_alt_1.jpg)'}}></div>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Download our app</p>
                                <p className="text-sm font-light">Book on the go with our mobile app</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <div className="bg-slate-300 w-[260px] h-36 mr-4 flex-shrink-0 bg-cover rounded bg-center" style={{backgroundImage: 'url(./images/hotel_alt_2.jpg)'}}></div>
                            </div>
                            <div>
                                <p className="font-bold text-sm">VLHotels Rewards</p>
                                <p className="text-sm font-light">COLLECT 10 NIGHTS, GET 1 REWARD*<br />NIGHT</p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-slate-300 w-[260px] h-36 mr-4 flex-shrink-0 bg-cover rounded bg-center" style={{backgroundImage: 'url(./images/hotel_alt_3.jpg)'}}></div>
                            <p className="font-bold text-sm">Last minute deals</p>
                            <p className="text-sm font-light">Book today - holiday tomorrow</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;