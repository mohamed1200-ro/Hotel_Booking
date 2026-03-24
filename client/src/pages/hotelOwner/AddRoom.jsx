import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    });

    const [inputs, setInputs] = useState({
        roomType: "",
        roomPrice: "",
        roomAmenities: {
            "Free Wifi": false,
            "Free Breakfast": false,
            "Room Service": false,
            "Mounttain View": false,
            "Pool Access": false,
        },
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form action="">
                <Title title={"Add Room"} align={"left"} font={"outfit"}
                    subtitle={"Fill in the details carefully and accurate room details, pricing, and amenitites, to enhance the user booking experience"} />
                {/* upload area for image */}
                <p className="text-gray-800 mt-10">Images</p>
                <div className="grid grid-cols-2 gap-4 sm:flex my-2 flex-wrap">
                    {Object.keys(images).map((key) => (
                        <label htmlFor={`roomImage${key}`} key={key}>
                            <img
                                className="max-h-13 opacity-80 cursor-pointer"
                                src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                                alt=""
                            />
                            <input
                                type="file"
                                accept="image/*"
                                id={`roomImage${key}`}
                                hidden
                                onChange={(e) => {
                                    setImages({
                                        ...images,
                                        [key]: e.target.files[0]
                                    });
                                }}
                            />
                        </label>
                    ))}
                </div>
                <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
                    <div className="flex-1 max-w-48">
                        <p className="text-gray-800 mt-4">Room Type</p>
                        <select className="border opacity-70 border-gray-300 mt-1 rounded w-full"
                        value={inputs.roomType} onChange={e => setInputs({...inputs, roomType: e.target.value})}>
                            <option value="">Select Room Type</option>
                            <option value="Single Bed">Single Bed</option>
                            <option value="Double Bed">Double Bed</option>
                            <option value="Luxury Room">Luxury Room</option>
                            <option value="Family Suite">Family Room</option>
                        </select>
                    </div>
                    <div className="flex-1 max-w-48">
                        <p className="text-gray-800 mt-4">Room Price</p>
                        <input type="number" placeholder="0" className="border border-gray-300 mt-1 rounded p-2"
                        value={inputs.roomPrice} onChange={e => setInputs({...inputs, roomPrice: e.target.value})} />
                    </div>
                </div>
                <p className="text-gray-800 mt-4">Room Amenities</p>
                <div className="flex flex-col flex-wrap gap-2 mt-1 text-gray-400 max-w-sm">
                    {Object.keys(inputs.roomAmenities).map((key) => (
                        <div key={key} className="flex items-center gap-2">
                            <input type="checkbox" id={`amenity${key}`} checked={inputs.roomAmenities[key]}
                            onChange={e => setInputs({...inputs, roomAmenities: {...inputs.roomAmenities, [key]: e.target.checked}})} />
                            <label htmlFor={`amenities${key+1}`}>{key}</label>
                        </div>
                    ))}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Add Room
                </button>
            </form>
        </div>
    );
};

export default AddRoom;