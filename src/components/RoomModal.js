import { useState } from 'react';
import Room from './Room';

const RoomModal = ({closeRoomModal}) => {
    const [ roomQuant, setRoomQuant ] = useState(1);

    const onRoomModalClose = () => {
        closeRoomModal();
    }


    return (
        <div className="modal h-screen fixed top-0 bg-white w-full z-50 flex flex-col">
            <section className="row  border-b-[2px] flex-0.5">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex">
                        <img src="./icons/x.svg" className="w-3"  onClick={onRoomModalClose}/>
                        <p className="text-[#cd5b5b] font-bold mx-7">Room options</p>
                    </div>
                </div>
            </section>
            <div className="overflow-y-scroll">
                {[...Array(roomQuant)].map((x, i) => {
                    return <Room index={i} />
                })}
            </div>
            <section className="row flex-[5] border-b-2">
                <div className="container mx-auto px-4 py-3">
                    <button className="text-sm font-bold text-blue-400" onClick={() => setRoomQuant(roomQuant + 1)}>ADD A ROOM</button>
                </div>
            </section>
            <section className="row flex-0.5">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-sm">1 Room</p>
                            <p className="text-sm">1 Adult</p>
                        </div>
                        <div className="btnWrapper">
                            <button className="bg-blue-400 text-white font-bold w-24 h-10 rounded-full">APPLY</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoomModal;