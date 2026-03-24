import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    const SidebarLinks = [
        {
            name: "Dashboard",
            path: "/owner/dashboard",
            icon: assets.dashboardIcon
        },
        {
            name: "Add Room",
            path: "/owner/add-room",
            icon: assets.addIcon
        },
        {
            name: "List Room",
            path: "/owner/list-room",
            icon: assets.listIcon
        }
    ]
    return (
        <div className="md:w-64 w-16 pt-4 border-r border-gray-300 h-full text-base flex flex-col transition-all duration-300">
            {SidebarLinks.map((link, index) => (
                <NavLink 
                    to={link.path} 
                    key={index} 
                    end={link.path === "/owner/dashboard"}
                    className={({isActive}) => `flex items-center gap-3 py-3 px-4 md:px-8 rounded-md border-r-4 transition-all duration-300 ${
                        isActive 
                        ? "bg-blue-600/10 border-blue-600 text-blue-600" 
                        : "hover:bg-gray-100/90 border-transparent text-gray-700"
                    }`}
                >
                    <img src={link.icon} alt={link.name} className="w-5 h-5" />
                    <span className="md:block hidden">{link.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar;