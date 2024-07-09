// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
// import Image from '@material-tailwind/react/Image';
// import Progress from '@material-tailwind/react/Progress';
// import Team1 from 'assets/img/team-1-800x800.jpg';
// import Team2 from 'assets/img/team-2-800x800.jpg';
// import Team3 from 'assets/img/team-3-800x800.jpg';
// import Team4 from 'assets/img/team-4-470x470.png';

// export default function CardTable() {
//     return (
//         <Card>
//             <CardHeader color="purple" contentPosition="left">
//                 <h2 className="text-white text-2xl">Card Table</h2>
//             </CardHeader>
//             <CardBody>
//                 <div className="overflow-x-auto">
//                     <table className="items-center w-full bg-transparent border-collapse">
//                         <thead>
//                             <tr>
//                                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Project
//                                 </th>
//                                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Budget
//                                 </th>
//                                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Status
//                                 </th>
//                                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Users
//                                 </th>
//                                 <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Completion
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Argon Design System
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $2,500 USD
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
//                                     pending
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <div className="flex">
//                                         <div className="w-10 h-10 rounded-full border-2 border-white">
//                                             <Image
//                                                 src={Team1}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team2}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team3}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team4}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                     </div>
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <Progress color="red" value="60" />
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Black Dashboard Sketch
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $1,800 USD
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
//                                     completed
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <div className="flex">
//                                         <div className="w-10 h-10 rounded-full border-2 border-white">
//                                             <Image
//                                                 src={Team1}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team2}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team3}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team4}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                     </div>
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <Progress color="green" value="100" />
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     React Material Dashboard
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $4,400 USD
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>{' '}
//                                     on schedule
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <div className="flex">
//                                         <div className="w-10 h-10 rounded-full border-2 border-white">
//                                             <Image
//                                                 src={Team1}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team2}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team3}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team4}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                     </div>
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <Progress color="teal" value="90" />
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     React Material Dashboard
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $2,200 USD
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
//                                     completed
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <div className="flex">
//                                         <div className="w-10 h-10 rounded-full border-2 border-white">
//                                             <Image
//                                                 src={Team1}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team2}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team3}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                         <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
//                                             <Image
//                                                 src={Team4}
//                                                 rounded
//                                                 alt="..."
//                                             />
//                                         </div>
//                                     </div>
//                                 </th>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     <Progress color="green" value="100" />
//                                 </th>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }
import Image from '../assets/img/team-1-800x800.jpg'
import Team2 from '../assets/img/team-2-800x800.jpg';
import Team3 from '../assets/img/team-3-800x800.jpg';
import Team4 from '../assets/img/team-4-470x470.png';

export default function CardTable() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-purple-500 text-white px-4 py-2">
                <h2 className="text-2xl">Card Table</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-transparent border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 py-3 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                Project
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                Budget
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                Users
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-semibold text-purple-500 uppercase tracking-wider">
                                Completion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Argon Design System
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                $2,500 USD
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
                                pending
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Image}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team2}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team3}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team4}
                                            alt="Team Member"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="text-sm text-gray-800 font-light">
                                            <span className="mr-2">60%</span>
                                            <div className="bg-red-500 h-1 rounded-lg">
                                                <div
                                                    className="h-full bg-red-500 rounded-lg"
                                                    style={{ width: '60%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Black Dashboard Sketch
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                $1,800 USD
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>
                                completed
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Image}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team2}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team3}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team4}
                                            alt="Team Member"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="text-sm text-gray-800 font-light">
                                            <span className="mr-2">100%</span>
                                            <div className="bg-green-500 h-1 rounded-lg">
                                                <div
                                                    className="h-full bg-green-500 rounded-lg"
                                                    style={{ width: '100%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                React Material Dashboard
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                $4,400 USD
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>
                                on schedule
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Image}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team2}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team3}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team4}
                                            alt="Team Member"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="text-sm text-gray-800 font-light">
                                            <span className="mr-2">90%</span>
                                            <div className="bg-teal-500 h-1 rounded-lg">
                                                <div
                                                    className="h-full bg-teal-500 rounded-lg"
                                                    style={{ width: '90%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                React Material Dashboard
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                $2,200 USD
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>
                                completed
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Image}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team2}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team3}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={Team4}
                                            alt="Team Member"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="text-sm text-gray-800 font-light">
                                            <span className="mr-2">100%</span>
                                            <div className="bg-green-500 h-1 rounded-lg">
                                                <div
                                                    className="h-full bg-green-500 rounded-lg"
                                                    style={{ width: '100%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
