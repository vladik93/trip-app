import { useState } from "react";

const Room = ({index}) => {
    const [ adults, setAdults ] = useState(1);
    const [ children, setChildren ] = useState(0);
    return (
        <section className="row border-b-[2px] flex-[2]">
                <div className="container mx-auto px-4 py-3">
                    <p className="font-bold">Room {index + 1}</p>
                    <div className="flex items-center">
                        <div className="flex flex-1">
                            <p className="text-sm">Adults:</p>
                        </div>
                        <div className="flex flex-1 justify-end items-center font-bold my-5">
                            <div className="btnWrapper relative h-4 w-4 mx-3 border-2 rounded-full border-gray-800">
                                <button className="absolute top-[-8px] left-[2px]" onClick={() => setAdults(adults - 1)}>-</button>
                            </div>
                            <span className="flex items-center mx-8 text-blue-400">{adults}</span>
                            <div className="btnWrapper relative h-4 w-4 mx-3 border-blue-400 border-2 rounded-full">
                                <button className="absolute top-[-8px] text-blue-400" onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex flex-1 flex-col">
                            <p className="text-sm">Children:</p>
                            <p className="text-xs">Ages 0 to 17</p>
                        </div>
                        <div className="flex flex-1 justify-end font-bold items-center">
                            <div className="btnWrapper relative h-4 w-4 mx-3 border-2 rounded-full border-gray-800">
                                <button className="absolute top-[-8px] left-[2px]" onClick={() => setChildren(children - 1)}>-</button>
                            </div>
                            <span className="flex items-center mx-8 text-blue-400 underline">{children}</span>
                            <div className="btnWrapper relative h-4 w-4 mx-3 border-blue-400 border-2 rounded-full">
                                <button className="absolute top-[-8px] text-blue-400" onClick={() => setChildren(children + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Room;