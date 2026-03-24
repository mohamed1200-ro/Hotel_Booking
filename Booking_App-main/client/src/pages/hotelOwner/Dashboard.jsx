import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        dashboardDummyData
    });

    return (
        <div>
            <Title align="left" font={"outfit"} title="Dashboard" subtitle="Moniter Your Hotel's Performance
            room listing, track booking and analyze revenue-all in one place. Stay updated with your hotel's performance."/>

            <div className="flex gap-4 my-8">
                {/* Total Booking */}
                <div className="bg-primary/3 border border-blue-500 flex p-4 pr-8 rounded">
                    <img src={assets.totalBookingIcon} alt="booking" className="max-sm:hidden w-10 h-10" />
                    <div className="flex flex-col sm:ml-4 font-medium">
                        <p className="text-lg text-blue-500">Total Booking</p>
                        <p className="text-neutral-400 text-base">{dashboardData.dashboardDummyData.totalBookings}</p>
                    </div>
                </div>
                {/* Total Revenue */}
                <div className="bg-primary/3 border border-blue-500 flex p-4 pr-8 rounded">
                    <img src={assets.totalRevenueIcon} alt="booking" className="max-sm:hidden w-10 h-10" />
                    <div className="flex flex-col sm:ml-4 font-medium">
                        <p className="text-lg text-blue-500">Total Revenue</p>
                        <p className="text-neutral-400 text-base">{dashboardData.dashboardDummyData.totalRevenue}</p>
                    </div>
                </div>
            </div>
            {/* Recent Booking */}
            <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>
            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
                            <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Room Type</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Total Amount</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-600">
                        {dashboardData.dashboardDummyData.bookings.map((booking, index) => (
                            <tr key={index}>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">{booking.user.username}</td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">{booking.room.roomType}</td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">{booking.totalPrice}</td>
                                <td className="py-3 px-4 border-t border-gray-300 text-center">
                                    <button 
                                        className={`py-1 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                                            booking.isPaid 
                                            ? "bg-green-200 text-green-600 hover:bg-green-300" 
                                            : "bg-amber-200 text-yellow-600 hover:bg-amber-300"
                                        }`}
                                        onClick={() => console.log('Booking status:', booking.isPaid ? 'Completed' : 'Pending')}
                                    >
                                        {booking.isPaid ? "Completed" : "Pending"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;