// import React, { useState } from "react";
// import "./App.css";

// const API_KEY = "AIzaSyAyPGkNUD07yD-s8W0zFRqV0W8O-Axiojs";

// export default function YouTubeSearch() {
//   const [query, setQuery] = useState("");
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const searchVideos = async () => {
//     if (!query.trim()) return;

//     setLoading(true);
//     setError(null);
//     setSelectedVideo(null);

//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
//           query
//         )}&type=video&maxResults=20&key=${API_KEY}`
//       );
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error.message);
//         setVideos([]);
//       } else {
//         setVideos(data.items || []);
//       }
//     } catch (err) {
//       setError("Failed to fetch videos");
//       setVideos([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const playVideo = (video) => {
//     setSelectedVideo(video);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
//       {/* Header */}
//       <header className={`sticky top-0 z-50 flex items-center justify-between px-4 h-14 ${darkMode ? 'bg-[#0f0f0f] border-b border-gray-800' : 'bg-white border-b border-gray-200'}`}>
//         {/* Left section - Logo */}
//         <div className="flex items-center gap-4">
//           <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//             <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <div className="flex items-center cursor-pointer">
//             <svg viewBox="0 0 90 20" className="h-6 fill-current text-red-600">
//               <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
//               <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
//               <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
//               <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
//               <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
//               <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
//               <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
//               <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
//               <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
//             </svg>
//           </div>
//         </div>

//         {/* Middle section - Search */}
//         <div className="flex-grow max-w-2xl mx-4">
//           <div className="flex">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search"
//               className={`w-full px-4 py-2 border ${darkMode ? 'bg-[#121212] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} rounded-l-full focus:outline-none`}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") searchVideos();
//               }}
//             />
//             <button
//               onClick={searchVideos}
//               disabled={loading}
//               className={`px-5 py-2 ${darkMode ? 'bg-[#222222] hover:bg-[#313131] border-gray-700' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} border border-l-0 rounded-r-full focus:outline-none`}
//             >
//               <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         {/* Right section - Icons */}
//         <div className="flex items-center gap-4">
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//             {darkMode ? (
//               <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//               </svg>
//             )}
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
//             <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//           </button>
//           <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium cursor-pointer">
//             U
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`w-64 fixed left-0 top-14 h-full ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} overflow-y-auto hidden md:block`}>
//           <div className="py-3">
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'bg-[#272727] text-white' : 'bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//               <span>Home</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>Shorts</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//               <span>Subscriptions</span>
//             </div>
            
//             <hr className={`my-3 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />
            
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>History</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//               </svg>
//               <span>Your videos</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//               <span>Liked videos</span>
//             </div>
            
//             <hr className={`my-3 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />
            
//             <h3 className="px-6 py-2 font-medium">Subscriptions</h3>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <div className="w-6 h-6 rounded-full bg-red-500 mr-4"></div>
//               <span>Channel 1</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <div className="w-6 h-6 rounded-full bg-blue-500 mr-4"></div>
//               <span>Channel 2</span>
//             </div>
//             <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
//               <div className="w-6 h-6 rounded-full bg-green-500 mr-4"></div>
//               <span>Channel 3</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:ml-64 px-4 py-6">
//           {/* Selected Video Player */}
//           {selectedVideo && (
//             <div className="mb-6">
//               <div className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} rounded-lg overflow-hidden`}>
//                 <div className="aspect-video relative">
//                   <iframe
//                     title={selectedVideo.snippet.title}
//                     className="w-full h-full absolute inset-0"
//                     src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <div className="p-4">
//                   <h1 className="text-xl font-bold mb-2">{selectedVideo.snippet.title}</h1>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
//                         {selectedVideo.snippet.channelTitle.charAt(0).toUpperCase()}
//                       </div>
//                       <div>
//                         <p className="font-medium">{selectedVideo.snippet.channelTitle}</p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {Math.floor(Math.random() * 10) + 1}M subscribers
//                         </p>
//                       </div>
//                     </div>
//                     <button className={`px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
//                       Subscribe
//                     </button>
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
//                       </svg>
//                       <span>{Math.floor(Math.random() * 900) + 100}K</span>
//                     </button>
                    
//                     <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
//                       </svg>
//                       <span>Dislike</span>
//                     </button>
                    
//                     <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M15 5.63l4.37-4.37-1.41-1.41-4.37 4.37-1.41-1.41-2.53 4.34 4.34-2.53-1.41-1.41zM5.63 9l-4.37-4.37 1.41-1.41 4.37 4.37 1.41-1.41 2.53 4.34-4.34-2.53 1.41-1.41zM9 18.37l-4.37 4.37-1.41-1.41 4.37-4.37-1.41-1.41 4.34-2.53-2.53 4.34-1.41-1.41zM18.37 15l4.37 4.37-1.41 1.41-4.37-4.37-1.41 1.41-2.53-4.34 4.34 2.53-1.41 1.41z"></path>
//                       </svg>
//                       <span>Share</span>
//                     </button>
                    
//                     <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
//                       </svg>
//                       <span>Save</span>
//                     </button>
                    
//                     <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
//                       </svg>
//                     </button>
//                   </div>
                  
//                   <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-[#272727]' : 'bg-gray-100'}`}>
//                     <div className="flex justify-between mb-2">
//                       <div>
//                         <span className="font-bold">{Math.floor(Math.random() * 10) + 1}M views</span>
//                         <span className="mx-1">•</span>
//                         <span>{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}</span>
//                       </div>
//                       <button>
//                         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
//                         </svg>
//                       </button>
//                     </div>
//                     <p className="text-sm whitespace-pre-line">{selectedVideo.snippet.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Error Banner */}
//           {error && (
//             <div className="mb-6 bg-red-500 text-white p-4 rounded-md">
//               <p>Error: {error}</p>
//             </div>
//           )}

//           {/* Loading Spinner */}
//           {loading && (
//             <div className="flex justify-center py-12">
//               <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           )}

//           {/* Empty State */}
//           {!videos.length && !loading && !error && !selectedVideo && (
//             <div className="flex flex-col items-center justify-center py-16">
//               <svg className={`h-32 w-32 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64 0 1.42-.56 2.7-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09 0-1.98-.78-3.78-2.05-5.09zM19.77 4l-1.41 1.45c1.65 1.72 2.67 4.04 2.67 6.55 0 2.51-1.02 4.83-2.67 6.55L19.77 20c1.9-2.02 3.06-4.71 3.06-8 0-3.29-1.16-5.98-3.06-8zM7.06 6.91c-1.27 1.31-2.05 3.11-2.05 5.09 0 1.98.78 3.78 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64 0-1.42.56-2.7 1.46-3.64L7.06 6.91zM4.24 4c-1.9 2.02-3.06 4.71-3.06 8 0 3.29 1.16 5.98 3.06 8l1.41-1.45c-1.65-1.72-2.67-4.04-2.67-6.55 0-2.51 1.02-4.83 2.67-6.55L4.24 4z"></path>
//               </svg>
//               <h2 className="mt-6 text-2xl font-bold">Find videos to watch</h2>
//               <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Search for something to discover new content</p>
//             </div>
//           )}

//           {/* Video Results */}
//           {videos.length > 0 && (
//             <div>
//               {!selectedVideo && <h2 className="text-xl font-bold mb-4">Search results</h2>}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {videos.map((video) => (
//                   <div 
//                     key={video.id.videoId} 
//                     onClick={() => playVideo(video)}
//                     className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer`}
//                   >
//                     {/* Thumbnail with duration */}
//                     <div className="relative">
//                       <img 
//                         src={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url} 
//                         alt={video.snippet.title}
//                         className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-200"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50">
//                         <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M8 5v14l11-7z"></path>
//                         </svg>
//                       </div>
//                       <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
//                         {`${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`}
//                       </div>
//                     </div>
                    
//                     <div className="p-3 flex">
//                       {/* Channel avatar */}
//                       <div className="flex-shrink-0 mr-3 mt-1">
//                         <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
//                           {video.snippet.channelTitle.charAt(0).toUpperCase()}
//                         </div>
//                       </div>
                      
//                       {/* Video details */}
//                       <div className="flex-grow">
//                         <h3 className={`font-bold text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                           {video.snippet.title}
//                         </h3>
//                         <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 hover:text-gray-700 dark:hover:text-gray-300">
//                           {video.snippet.channelTitle}
//                         </p>
//                         <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
//                           {Math.floor(Math.random() * 1000)}K views • {Math.floor(Math.random() * 12) + 1} months ago
//                         </p>
//                       </div>
                      
//                       {/* Video options */}
//                       <div className="flex-shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
//                         <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                           <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




















import React, { useState, useEffect } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export default function YouTubeSearch() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [isLoadingTrending, setIsLoadingTrending] = useState(true);

  // Fetch trending videos on component mount
  useEffect(() => {
    const fetchTrendingVideos = async () => {
      setIsLoadingTrending(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.error) {
          console.error(data.error);
        } else {
          setTrendingVideos(data.items || []);
        }
      } catch (err) {
        console.error("Error fetching trending videos:", err);
      } finally {
        setIsLoadingTrending(false);
      }
    };
    
    fetchTrendingVideos();
  }, []);

  const searchVideos = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setSelectedVideo(null);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=20&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setVideos([]);
      } else {
        setVideos(data.items || []);
      }
    } catch (err) {
      setError("Failed to fetch videos");
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Categories shown on home page
  const categories = [
    "All", "Music", "Gaming", "News", "Live", "Comedy", "Sports", 
    "Learning", "Fashion", "Technology", "Cooking", "Travel"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 flex items-center justify-between px-4 h-14 ${darkMode ? 'bg-[#0f0f0f] border-b border-gray-800' : 'bg-white border-b border-gray-200'}`}>
        {/* Left section - Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center cursor-pointer">
            <svg viewBox="0 0 90 20" className="h-6 fill-current text-red-600">
              <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
              <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
              <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
              <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
              <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
              <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
              <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
              <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
              <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
            </svg>
          </div>
        </div>

        {/* Middle section - Search */}
        <div className="flex-grow max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className={`w-full px-4 py-2 border ${darkMode ? 'bg-[#121212] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} rounded-l-full focus:outline-none`}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchVideos();
              }}
            />
            <button
              onClick={searchVideos}
              disabled={loading}
              className={`px-5 py-2 ${darkMode ? 'bg-[#222222] hover:bg-[#313131] border-gray-700' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} border border-l-0 rounded-r-full focus:outline-none`}
            >
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right section - Icons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            {darkMode ? (
              <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium cursor-pointer">
            U
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`w-64 fixed left-0 top-14 h-full ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} overflow-y-auto hidden md:block`}>
          <div className="py-3">
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'bg-[#272727] text-white' : 'bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Shorts</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Subscriptions</span>
            </div>
            
            <hr className={`my-3 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />
            
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>History</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Your videos</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Liked videos</span>
            </div>
            
            <hr className={`my-3 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />
            
            <h3 className="px-6 py-2 font-medium">Subscriptions</h3>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <div className="w-6 h-6 rounded-full bg-red-500 mr-4"></div>
              <span>Channel 1</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <div className="w-6 h-6 rounded-full bg-blue-500 mr-4"></div>
              <span>Channel 2</span>
            </div>
            <div className={`flex items-center px-6 py-2 rounded-lg ${darkMode ? 'hover:bg-[#272727] text-white' : 'hover:bg-gray-100 text-black'} mb-1 cursor-pointer`}>
              <div className="w-6 h-6 rounded-full bg-green-500 mr-4"></div>
              <span>Channel 3</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:ml-64 px-4 py-6">
          {/* Selected Video Player */}
          {selectedVideo && (
            <div className="mb-6">
              <div className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} rounded-lg overflow-hidden`}>
                <div className="aspect-video relative">
                  <iframe
                    title={selectedVideo.snippet.title}
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold mb-2">{selectedVideo.snippet.title}</h1>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                        {selectedVideo.snippet.channelTitle.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium">{selectedVideo.snippet.channelTitle}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {Math.floor(Math.random() * 10) + 1}M subscribers
                        </p>
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      Subscribe
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                      </svg>
                      <span>{Math.floor(Math.random() * 900) + 100}K</span>
                    </button>
                    
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                      </svg>
                      <span>Dislike</span>
                    </button>
                    
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 5.63l4.37-4.37-1.41-1.41-4.37 4.37-1.41-1.41-2.53 4.34 4.34-2.53-1.41-1.41zM5.63 9l-4.37-4.37 1.41-1.41 4.37 4.37 1.41-1.41 2.53 4.34-4.34-2.53 1.41-1.41zM9 18.37l-4.37 4.37-1.41-1.41 4.37-4.37-1.41-1.41 4.34-2.53-2.53 4.34-1.41-1.41zM18.37 15l4.37 4.37-1.41 1.41-4.37-4.37-1.41 1.41-2.53-4.34 4.34 2.53-1.41 1.41z"></path>
                      </svg>
                      <span>Share</span>
                    </button>
                    
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-[#272727] hover:bg-[#3f3f3f]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                      </svg>
                      <span>Save</span>
                    </button>
                    
                    <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-[#272727]' : 'bg-gray-100'}`}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-bold">{Math.floor(Math.random() * 10) + 1}M views</span>
                        <span className="mx-1">•</span>
                        <span>{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <button>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm whitespace-pre-line">{selectedVideo.snippet.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-6 bg-red-500 text-white p-4 rounded-md">
              <p>Error: {error}</p>
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Home Page Content - Categories and Trending videos */}
          {!videos.length && !loading && !error && !selectedVideo && (
            <>
              {/* Categories */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium ${
                      index === 0 
                        ? (darkMode ? 'bg-white text-black' : 'bg-black text-white')
                        : (darkMode ? 'bg-[#272727] text-white hover:bg-[#3f3f3f]' : 'bg-gray-100 text-black hover:bg-gray-200')
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Trending Videos */}
              <div>
                <h2 className="text-xl font-bold mb-4">Recommended</h2>
                
                {isLoadingTrending ? (
                  <div className="flex justify-center py-12">
                    <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Generate placeholder videos when trending is empty */}
                    {(trendingVideos.length === 0 ? Array(12).fill({}) : trendingVideos).map((video, index) => {
                      // Use real data or generate placeholder data
                      const isPlaceholder = !video.id;
                      const videoId = isPlaceholder ? `placeholder-${index}` : (video.id.videoId || video.id);
                      
                      return (
                        <div 
                          key={videoId} 
                          onClick={() => !isPlaceholder && playVideo(video)}
                          className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${!isPlaceholder ? 'cursor-pointer' : ''}`}
                        >
                          {/* Thumbnail */}
                          <div className="relative">
                            {isPlaceholder ? (
                              <div className={`w-full aspect-video ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`}></div>
                            ) : (
                              <>
                                <img 
                                  src={video.snippet?.thumbnails?.high?.url || video.snippet?.thumbnails?.medium?.url} 
                                  alt={video.snippet?.title || "Video thumbnail"}
                                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-200"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50">
                                  <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"></path>
                                  </svg>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                                  {`${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`}
                                </div>
                              </>
                            )}
                          </div>
                          
                          <div className="p-3 flex">
                            {/* Channel avatar */}
                            <div className="flex-shrink-0 mr-3 mt-1">
                              {isPlaceholder ? (
                                <div className={`w-9 h-9 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse`}></div>
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                  {(video.snippet?.channelTitle || "Y").charAt(0).toUpperCase()}
                                </div>
                              )}
                            </div>
                            
                            {/* Video details */}
                            <div className="flex-grow">
                              {isPlaceholder ? (
                                <>
                                  <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-3/4 animate-pulse mb-2`}></div>
                                  <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-1/2 animate-pulse mb-1`}></div>
                                  <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-1/3 animate-pulse`}></div>
                                </>
                              ) : (
                                <>
                                  <h3 className={`font-bold text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {video.snippet?.title || "Video Title"}
                                  </h3>
                                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 hover:text-gray-700 dark:hover:text-gray-300">
                                    {video.snippet?.channelTitle || "Channel Name"}
                                  </p>
                                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                                    {Math.floor(Math.random() * 1000)}K views • {Math.floor(Math.random() * 12) + 1} months ago
                                  </p>
                                </>
                              )}
                            </div>
                            
                            {/* Video options */}
                            {!isPlaceholder && (
                              <div className="flex-shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
                                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                                  </svg>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Sections (like shorts, etc.) */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Shorts</h2>
                  <svg className="w-6 h-6 text-red-600 fill-current" viewBox="0 0 20 20">
                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11h-4v4H9v-4H5V9h4V5h2v4h4v2z" />
                  </svg>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                  {Array(8).fill().map((_, index) => (
                    <div key={`short-${index}`} className="cursor-pointer">
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                        <div className={`w-full h-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`}></div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="text-white text-sm font-medium line-clamp-2">
                            {Math.random() > 0.5 ? "#shorts" : "Short video title here"}
                          </div>
                          <div className="text-white text-xs mt-1">
                            {Math.floor(Math.random() * 10) + 1}M views
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Search Results */}
          {videos.length > 0 && (
            <div>
              {!selectedVideo && <h2 className="text-xl font-bold mb-4">Search results</h2>}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {videos.map((video) => (
                  <div 
                    key={video.id.videoId} 
                    onClick={() => playVideo(video)}
                    className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    {/* Thumbnail with duration */}
                    <div className="relative">
                      <img 
                        src={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url} 
                        alt={video.snippet.title}
                        className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50">
                        <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                        {`${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`}
                      </div>
                    </div>
                    
                    <div className="p-3 flex">
                      {/* Channel avatar */}
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {video.snippet.channelTitle.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      
                      {/* Video details */}
                      <div className="flex-grow">
                        <h3 className={`font-bold text-sm line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {video.snippet.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 hover:text-gray-700 dark:hover:text-gray-300">
                          {video.snippet.channelTitle}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                          {Math.floor(Math.random() * 1000)}K views • {Math.floor(Math.random() * 12) + 1} months ago
                        </p>
                      </div>
                      
                      {/* Video options */}
                      <div className="flex-shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
                        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}