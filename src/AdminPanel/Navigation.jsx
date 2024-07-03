import { AiOutlineDashboard, AiOutlineBarChart, AiOutlineHistory, AiOutlineFileExcel, AiOutlineDollarCircle, AiOutlineSchedule, AiOutlineUser } from 'react-icons/ai'; // Importing icons
import Logo from "../../src/assets/website/Vector.png";

export default function Navigation() {
  const navlinks = [
    { name: "Dashboard", icon: AiOutlineDashboard },
    { name: "Match Statistics", icon: AiOutlineBarChart },
    { name: "Players' History", icon: AiOutlineHistory },
    { name: "Excel Sheet Upload", icon: AiOutlineFileExcel },
    { name: "Transaction Form Fill-up", icon: AiOutlineDollarCircle },
    { name: "Match Schedule", icon: AiOutlineSchedule },
    { name: "Tournament Current Players", icon: AiOutlineUser },
  ];

  return (
    <div className="px-6 py-4 flex flex-col border border-r-1 w-1/5 h-screen md:h-screen sm:h-screen">
      <div className="logo-div flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-2" />
        <span className="text-lg font-bold">Tournament</span>
      </div>
      <div className="mt-6">
        {navlinks.map((link, index) => (
          <div key={index} className="flex items-center mt-4 cursor-pointer text-gray-600">
            <link.icon className="text-xl mr-2" />
            <span className="text-sm">{link.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
