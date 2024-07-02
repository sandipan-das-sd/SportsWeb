import React from 'react'

const UpcomingMatchesPage = () => {
  const ballBusters = [
    { name: "Player 1", phone: "+91 98303 82501" },
    { name: "Player 2", phone: "+91 96816 90960" },
    { name: "Player 3", phone: "+91 96196 55706" },
    { name: "Player 4", phone: "+91 90381 80717" },
    { name: "Player 5", phone: "+91 91633 30833" },
    { name: "Player 6", phone: "+91 90384 20823" },
  ];

  const roofTopChallengers = [
    { name: "Player 1", phone: "+91 82408 34306" },
    { name: "Player 2", phone: "+91 98049 10512" },
    { name: "Player 3", phone: "Pratik Bhattacharya Da" },
    { name: "Player 4", phone: "+91 90510 54614" },
    { name: "Player 5", phone: "+91 89812 60273" },
    { name: "Player 6", phone: "Rupayan" },
  ];

  const umpires = [
    { title: "Onfield Umpire", phone: "+91 91236 01537" },
    { title: "Leg Umpire", phone: "+91 83349 82112" },
    { title: "Reserved Umpire", phone: "+91 83340 58696" },
  ];

  const getAvatarUrl = (name) => `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}&background=random`;

  return (
    <div className="container mx-auto py-6 dark:bg-gray-900 dark:text-white">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-semibold mb-4">Upcoming Matches</h1>
      <h2 className="text-2xl font-bold mb-4 text-primary underline dark:text-secondary">
        Terrace Cup 8 Final
      </h2>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      {/* Match details grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {/* Venue */}
  <div className="flex items-center justify-center">
    {/* Venue image */}
    <img
      src="https://th.bing.com/th/id/R.152852584291c5747bdfdec4dc483491?rik=vGU4%2fzAB4S9v4Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2fd%2fc%2f606634.jpg&ehk=Dy76IMyNyp%2b7sQ0beA5fThidv34z4Ri7HifNIifvo1Q%3d&risl=&pid=ImgRaw&r=0"
      alt="Venue"
      className="w-12 h-12 mr-2"
    />
    <p className="text-lg">
      <strong>Venue:</strong> Tiger Turf
    </p>
  </div>
  
  {/* Time */}
  <div className="flex items-center justify-center">
    <img
      src="https://img.icons8.com/color/48/000000/time.png"
      alt="Time"
      className="w-12 h-12 mr-2"
    />
    <p className="text-lg">
      <strong>Time:</strong> 11 am - 1 pm
    </p>
  </div>
  
  {/* Weather */}
  <div className="flex items-center justify-center">
    <img
      src="https://img.icons8.com/color/48/000000/partly-cloudy-day.png"
      alt="Weather"
      className="w-12 h-12 mr-2"
    />
    <p className="text-lg">
      <strong>Weather Condition:</strong> 50% chances of rain/light drizzle, Overcast
    </p>
  </div>
  
  {/* Pitch */}
  <div className="flex items-center justify-center md:col-span-2 mt-6 md:mt-0">
   
    <p className="text-lg ">
      <strong>Pitch Condition:</strong> Slow

    </p>
  </div>
</div>

      
      {/* Team sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ball Busters */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Ball Busters</h3>
            <span className="text-sm font-medium flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-9a1 1 0 00-.293.707l-2 6a1 1 0 001.894.586L10 13.5V9a1 1 0 00-.293-.707zm0-2a1 1 0 011 1v4.5l1.293 1.293a1 1 0 11-1.414 1.414L10 12.414l-.293-.293a1 1 0 111.414-1.414L11 13.086V8a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
  2 HR:00MIN:45SEC
</span>

          </div>
          {/* Players list */}
          {ballBusters.map((player, index) => (
            <div
              key={index}
              className="flex items-center mb-4 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={getAvatarUrl(player.name)}
                alt="Player Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{player.name}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {player.phone}
                </p>
                <p className="text-blue-600 dark:text-blue-400">
                  Payment Status: Paid
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* RoofTop Challengers */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">RoofTop Challengers</h3>
            <span className="text-sm font-medium flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-9a1 1 0 00-.293.707l-2 6a1 1 0 001.894.586L10 13.5V9a1 1 0 00-.293-.707zm0-2a1 1 0 011 1v4.5l1.293 1.293a1 1 0 11-1.414 1.414L10 12.414l-.293-.293a1 1 0 111.414-1.414L11 13.086V8a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
  2 HR:00MIN:45SEC
</span>

          </div>
          {/* Players list */}
          {roofTopChallengers.map((player, index) => (
            <div
              key={index}
              className="flex items-center mb-4 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={getAvatarUrl(player.name)}
                alt="Player Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{player.name}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {player.phone}
                </p>
                <p className="text-blue-600 dark:text-blue-400">
                  Payment Status: Paid
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Umpires */}
      <div>
        <h3 className="text-xl font-semibold mt-8 mb-4 underline">Umpires</h3>
        {umpires.map((umpire, index) => (
          <div
            key={index}
            className="flex items-center mb-4 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={getAvatarUrl(umpire.title)}
              alt="Umpire Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{umpire.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{umpire.phone}</p>
              <p className="text-blue-600 dark:text-blue-400">Total Participants: 12</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* What to Expect */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 underline">What to Expect</h3>
        <p className="text-lg leading-relaxed">
         <p>Ball Busters are quite favourites with complete domination on all teams keeping 100 percent win percent with In form Indra hitting balls at will and topping the charts.Captain has led from front with slow and steady knock and a solid contribution from rest of team in all depts. On the other hand,Roof top challengers have also revived their form after loosing heavily to Ball Busters in their first match.their captain KD is in top form and the team will expect him to fire in final also.The rest of the team will also be determined to pitch in and contribute to the teams performance.
         Overall if rain doesnot play spoilsport let's hope for an interesting final and not a one sided one</p>
        </p>
      </div>
    </div>
  </div>
  );
};

export default UpcomingMatchesPage;
