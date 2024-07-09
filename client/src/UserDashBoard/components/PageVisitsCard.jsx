// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
// import Button from '@material-tailwind/react/Button';

// export default function PageVisitsCard() {
//     return (
//         <Card>
//             <CardHeader color="blue" contentPosition="none">
//                 <div className="w-full flex items-center justify-between">
//                     <h2 className="text-white text-2xl">Page Visits</h2>
//                     <Button
//                         color="transparent"
//                         buttonType="link"
//                         size="lg"
//                         style={{ padding: 0 }}
//                     >
//                         See More
//                     </Button>
//                 </div>
//             </CardHeader>
//             <CardBody>
//                 <div className="overflow-x-auto">
//                     <table className="items-center w-full bg-transparent border-collapse">
//                         <thead>
//                             <tr>
//                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     ID
//                                 </th>
//                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Name
//                                 </th>
//                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Salary
//                                 </th>
//                                 <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                                     Country
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     1
//                                 </th>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Dakota Rice
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $36,738
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Niger
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     2
//                                 </th>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Minerva Hooper
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $23,789
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Curaçao
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     3
//                                 </th>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Sage Rodriguez
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $56,142
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Netherlands
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     4
//                                 </th>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Philip Chaney
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     $38,735
//                                 </td>
//                                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                                     Korea, South
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }


export default function PageVisitsCard() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-blue-500 text-white">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Page Visits</h2>
                    <button className="text-blue-200 hover:text-white focus:outline-none">
                        See More
                    </button>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-transparent border-collapse">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="px-2 py-2 text-teal-500 font-light text-sm">ID</th>
                                <th className="px-2 py-2 text-teal-500 font-light text-sm">Name</th>
                                <th className="px-2 py-2 text-teal-500 font-light text-sm">Salary</th>
                                <th className="px-2 py-2 text-teal-500 font-light text-sm">Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="px-2 py-2 text-sm">1</td>
                                <td className="px-2 py-2 text-sm">Dakota Rice</td>
                                <td className="px-2 py-2 text-sm">$36,738</td>
                                <td className="px-2 py-2 text-sm">Niger</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-2 py-2 text-sm">2</td>
                                <td className="px-2 py-2 text-sm">Minerva Hooper</td>
                                <td className="px-2 py-2 text-sm">$23,789</td>
                                <td className="px-2 py-2 text-sm">Curaçao</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-2 py-2 text-sm">3</td>
                                <td className="px-2 py-2 text-sm">Sage Rodriguez</td>
                                <td className="px-2 py-2 text-sm">$56,142</td>
                                <td className="px-2 py-2 text-sm">Netherlands</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="px-2 py-2 text-sm">4</td>
                                <td className="px-2 py-2 text-sm">Philip Chaney</td>
                                <td className="px-2 py-2 text-sm">$38,735</td>
                                <td className="px-2 py-2 text-sm">Korea, South</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
