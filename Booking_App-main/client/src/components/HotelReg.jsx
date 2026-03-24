import { assets, cities } from "../assets/assets";

const HotelReg = () => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-50 flex items-center justify-center">
            <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
                <img src={assets.regImage} alt="reg-image" className="w-1/2 rounded-xl
                hidden md:block" />
                <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
                    <img src={assets.closeIcon} alt="close-icon" className="absolute top-4 right-4 w-4 h-4 cursor-pointer" />
                    <p className="text-gray-800 text-2xl font-semibold mt-6">Register Your Hotel</p>
                    {/* Hotel Name */}
                    <div className="w-full mt-4">
                        <label htmlFor="name" className="text-gray-700">Hotel Name</label>
                        <input type="text" id="name" placeholder="type here" className="w-full px-3 py-2.5 mt-1 rounded-md bg-transparent border border-gray-200 outline-indigo-500 font-light" required />
                    </div>
                    {/* Hotel phone number */}
                    <div className="w-full mt-4">
                        <label htmlFor="contact" className="text-gray-700">Hotel Phone Number</label>
                        <input type="text" id="contact" placeholder="type here" className="w-full px-3 py-2.5 mt-1 rounded-md bg-transparent border border-gray-200 outline-indigo-500 font-light" required />
                    </div>
                    {/* Hotel Address */}
                    <div className="w-full mt-4">
                        <label htmlFor="address" className="text-gray-700">Hotel Address</label>
                        <input type="text" id="address" placeholder="type here" className="w-full px-3 py-2.5 mt-1 rounded-md bg-transparent border border-gray-200 outline-indigo-500 font-light" required />
                    </div>
                    {/* Select City Drop Menu */}
                    <div className="w-full mt-4 max-w-60 mr-auto">
                        <label htmlFor="city" className="font-medium text-gray-500">Select City</label>
                        <select id="city" className="w-full px-3 py-2.5 mt-1 rounded-md bg-transparent border border-gray-200 outline-indigo-500 font-light">
                            <option value="">Select City</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 mt-6 rounded cursor-pointer mr-auto transition-all duration-300">Register</button>

                </div>
            </form>
        </div>
    )
}

export default HotelReg;