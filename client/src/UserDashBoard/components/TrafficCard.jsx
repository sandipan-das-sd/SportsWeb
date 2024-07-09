


export default function TrafficCard() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-purple-500 px-4 py-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-2xl">Social Media</h2>
                    <button className="text-purple-500 hover:text-purple-700 focus:outline-none">
                        See More
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full bg-transparent border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 py-3 text-purple-500 border-b border-gray-200 text-sm font-light text-left">
                                Referral
                            </th>
                            <th className="px-2 py-3 text-purple-500 border-b border-gray-200 text-sm font-light text-left">
                                Visitors
                            </th>
                            <th className="px-2 py-3 text-purple-500 border-b border-gray-200 text-sm font-light text-left">
                                Progress
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Facebook
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                1,480
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="bg-blue-500 h-2 rounded-lg">
                                            <div
                                                className="h-full bg-blue-500 rounded-lg"
                                                style={{ width: '60%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Google
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                4,807
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="bg-red-500 h-2 rounded-lg">
                                            <div
                                                className="h-full bg-red-500 rounded-lg"
                                                style={{ width: '80%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Instagram
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                3,678
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="bg-indigo-500 h-2 rounded-lg">
                                            <div
                                                className="h-full bg-indigo-500 rounded-lg"
                                                style={{ width: '75%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                Twitter
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-light text-gray-800">
                                2,645
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <div className="bg-lightBlue-500 h-2 rounded-lg">
                                            <div
                                                className="h-full bg-lightBlue-500 rounded-lg"
                                                style={{ width: '90%' }}
                                            ></div>
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
