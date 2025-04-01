// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { countries } from './countries';

// function App() {
//     const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');

//     const filteredCountries = searchQuery
//         ? countries.filter(country =>
//             country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             country.dial_code.includes(searchQuery)
//         )
//         : countries;

//     return (
//         <div className=" bg-gray-100 flex flex-col items-center justify-center ">
//             <div className="w-full max-w-md">
//                 <div className="relative">
//                     <div className="flex h-[36px] items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
//                         {/* Country selector button */}
//                         <button
//                             type="button"
//                             className="flex items-center space-x-1 px-3 py-2 border-r border-gray-300 bg-gray-50 hover:bg-gray-100"
//                             onClick={() => setIsOpen(!isOpen)}
//                         >
//                             <span className="text-lg">{selectedCountry.flag}</span>
//                             <span className="text-gray-700 font-medium">{selectedCountry.dial_code}</span>
//                             <ChevronDown size={16} className="text-gray-500" />
//                         </button>

//                         {/* Phone number input */}
//                         <input
//                             type="tel"
//                             className="flex-1  px-4 py-2 outline-none"
//                             placeholder="Phone number"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                         />
//                     </div>

//                     {/* Country dropdown */}
//                     {isOpen && (
//                         <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
//                             <div className="sticky top-0 bg-white p-2 border-b border-gray-200">
//                                 <input
//                                     type="text"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                     placeholder="Search countries..."
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 {filteredCountries.map((country) => (
//                                     <button
//                                         key={country.code}
//                                         className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-left"
//                                         onClick={() => {
//                                             setSelectedCountry(country);
//                                             setIsOpen(false);
//                                             setSearchQuery('');
//                                         }}
//                                     >
//                                         <span className="text-lg mr-2">{country.flag}</span>
//                                         <span className="font-medium">{country.name}</span>
//                                         <span className="ml-auto text-gray-500">{country.dial_code}</span>
//                                     </button>
//                                 ))}

//                                 {filteredCountries.length === 0 && (
//                                     <div className="px-4 py-3 text-gray-500 text-center">
//                                         No countries found
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;