// import Card from '@material-tailwind/react/Card';
// import CardBody from '@material-tailwind/react/CardBody';
// import CardFooter from '@material-tailwind/react/CardFooter';
// import Image from '@material-tailwind/react/Image';
// import H5 from '@material-tailwind/react/Heading5';
// import Icon from '@material-tailwind/react/Icon';
// import LeadText from '@material-tailwind/react/LeadText';
// import Button from '@material-tailwind/react/Button';
// import ProfilePicture from '../assets/img/team-1-800x800.jpg';

// export default function ProfileCard() {
//     return (
//         <Card>
//             <div className="flex flex-wrap justify-center">
//                 <div className="w-48 px-4 -mt-24">
//                     <Image src={ProfilePicture} rounded raised />
//                 </div>
//                 <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
//                     <div className="p-4 text-center">
//                         <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
//                             22
//                         </span>
//                         <span className="text-sm text-gray-700">Friends</span>
//                     </div>
//                     <div className="p-4 text-center">
//                         <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
//                             89
//                         </span>
//                         <span className="text-sm text-gray-700">Comments</span>
//                     </div>
//                     <div className="p-4 text-center">
//                         <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
//                             10
//                         </span>
//                         <span className="text-sm text-gray-700">Photos</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-center">
//                 <H5 color="gray">John Smith</H5>
//                 <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
//                     <Icon name="place" size="xl" />
//                     Los Angeles, California
//                 </div>
//                 <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
//                     <Icon name="work" size="xl" />
//                     Solution Manager - Creative Tim Officer
//                 </div>
//                 <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
//                     <Icon name="account_balance" size="xl" />
//                     University of Computer Science
//                 </div>
//             </div>
//             <CardBody>
//                 <div className="border-t border-lightBlue-200 text-center px-2 ">
//                     <LeadText color="blueGray">
//                         An artist of considerable range, Jenna the name taken by
//                         Melbourne-raised, Brooklyn-based Nick Murphy writes,
//                         performs and records all of his own music, giving it a
//                         warm, intimate feel with a solid groove structure. An
//                         artist of considerable range.
//                     </LeadText>
//                 </div>
//             </CardBody>
//             <CardFooter>
//                 <div className="w-full flex justify-center -mt-8">
//                     <a
//                         href="#pablo"
//                         className="mt-5"
//                         onClick={(e) => e.preventDefault()}
//                     >
//                         <Button color="purple" buttonType="link" ripple="dark">
//                             Show more
//                         </Button>
//                     </a>
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// }

import ProfilePicture from '../assets/img/team-1-800x800.jpg';

export default function ProfileCard() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="flex justify-center">
                <div className="w-48 px-4 -mt-24">
                    <img src={ProfilePicture} alt="Profile" className="rounded-full border-solid border-4 border-white shadow-lg" />
                </div>
            </div>
            <div className="text-center px-6 py-4">
                <div className="mb-4">
                    <div className="text-xl font-medium text-gray-900">
                        22
                    </div>
                    <div className="text-sm text-gray-700">Friends</div>
                </div>
                <div className="mb-4">
                    <div className="text-xl font-medium text-gray-900">
                        89
                    </div>
                    <div className="text-sm text-gray-700">Comments</div>
                </div>
                <div className="mb-4">
                    <div className="text-xl font-medium text-gray-900">
                        10
                    </div>
                    <div className="text-sm text-gray-700">Photos</div>
                </div>
                <h2 className="text-xl font-medium text-gray-900 mb-2">John Smith</h2>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Los Angeles, California</span>
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Solution Manager - Creative Tim Officer</span>
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>University of Computer Science</span>
                </div>
                <p className="text-gray-700 text-base mt-10">
                    An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    Show more
                </button>
            </div>
        </div>
    );
}

