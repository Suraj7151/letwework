// import React from "react";

// const services = () => {
//   return (
//     <div className="h-[30rem] w-[32rem] border rounded-lg ">
//       <div className="m-4 grid grid-col-2 justify-center align-content-center gap-4" >
//         <div className=" text-2xl font-bold text-gray-600">
//           <h1>What are you looking for?</h1>
//         </div>

//         <div className="services grid grid-cols-3 gap-8">
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//           <div>
//             <div className="w-32 h-20 rounded bg-gray-200"></div>
//             <h1>House Cleaning</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default services;

import React from "react";
import Image from 'next/image';

const Services = () => {
  const services = [
    "Women's Salon & Spa",
    "Men's Salon & Massage",
    "AC & Appliance Repair",
    "Cleaning & Pest Control",
    "Electrician, Plumber & Carpenter",
    "Native Water Purifier",
    "Native Smart Locks",
    "Painting & Waterproofing",
    "Wall Panels",
  ];

  return (
    <div className="mx-auto py-4 flex  justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">
          What are you looking for?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
              <p className="text-center text-sm font-medium text-gray-700">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-2 hidden md:block">
        <Image
          src="/assets/ac.jpg"
          alt="AC Service"
          width={1000}
          height={800}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Services;
