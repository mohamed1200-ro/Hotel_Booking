import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
    const [rooms, setRooms] = useState(roomsDummyData);

    const handleAvailabilityToggle = (index) => {
        const updatedRooms = [...rooms];
        updatedRooms[index] = {
            ...updatedRooms[index],
            isAvailable: !updatedRooms[index].isAvailable
        };
        setRooms(updatedRooms);
    };

    return (
        <div>
            <Title title="Room Listing" font="outfit" align={"left"}
                subtitle={"View, edit, or manage all listed rooms. Keep the information up-to-date to provide accurate details to potential guests."} />
            <p className="mt-8 text-blue-500">All Rooms</p>
            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 
            overflow-y-scroll mt-3">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
                            <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Facility</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Price / night</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Available</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {rooms.map((room, index) => (
                            <tr key={index}>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">{room.roomType}</td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                                    {room.amenities.join(", ")}
                                </td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                                    ${room.pricePerNight}
                                </td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            checked={room.isAvailable}
                                            onChange={() => handleAvailabilityToggle(index)}
                                        />
                                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600
                                        transition-colors duration-200" />
                                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white
                                        rounded-full transition-transform duration-200 ease-in-out
                                        peer-checked:translate-x-5" />
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListRoom;