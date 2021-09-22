/* eslint-disable jsx-a11y/anchor-is-valid */

const options = ["Home", "Templates", "Search Domain", "Pricing"];

const Navbar = () => {
  return (
    <nav className="w-screen max-w-7xl h-24 self-center">
      <ul className="flex flex-row justify-b  etween h-full w-full">
        <div className="h-full flex flex-row justify-start items-center font-bold gap-x-10">
          <li className="mr-26">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="156"
              height="27"
              viewBox="0 0 156 27"
            >
              <text
                id="BLANK_CUT"
                data-name="BLANK CUT"
                transform="translate(0 22)"
                fill="#164360"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.33em"
              >
                <tspan x="0" y="0" className="font-normal">
                  BLANK CUT
                </tspan>
              </text>
            </svg>
          </li>
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </div>
        <div className="h-full flex flex-row justify-start items-center font-bold gap-x-10">
          <li>Log in</li>
          <li>Sign up</li>
        </div>
      </ul>
    </nav>

    // <div className="h-20 grid grid-rows-3 grid-flow-col gap-4 pt-40">
    //   <nav className="bg-gray-900 h-16 fixed top-0 inset-x-0">
    //     <div className="max-w-6xl mx-auto px-4">
    //       <div className="flex justify-between">
    //         <div className="flex space-x-4">
    //           <div>
    //             <a
    //               href="#"
    //               className="flex items-center py-5 px-2 text-gray-100 hover:text-gray-300"
    //             >
    //               <svg
    //                 className="h-6 w-6 mr-1 text-blue-400"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   strokeLinejoin="round"
    //                   stroke-width="2"
    //                   d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    //                 />
    //               </svg>
    //               <span className="font-bold">Blank Cut Demo</span>
    //             </a>
    //           </div>
    //           <div className="hidden md:flex items-center space-x-1">
    //             <a
    //               href="#"
    //               className="py-5 px-3 text-gray-100 hover:text-gray-300"
    //             >
    //               Features
    //             </a>
    //             <a
    //               href="#"
    //               className="py-5 px-3 text-gray-100 hover:text-gray-300"
    //             >
    //               About
    //             </a>
    //           </div>
    //         </div>
    //         {/* <div className="hidden md:flex items-center space-x-1">
    //                         <a href="#" className="py-5 px-3 text-gray-100">Login</a>
    //                         <a href="#" className="py-2 px-3 bg-blue-600 hover:bg-blue-400 text-white rounded transition duration-300 font-medium">Sign Up</a>
    //                     </div> */}
    //         <div className="md:hidden flex items-center">
    //           <button className="mobile-menu-button">
    //             <svg
    //               className="w-6 h-6 text-yellow-300"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 strokeLinejoin="round"
    //                 stroke-width="2"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mobile-menu hidden md:hidden">
    //       <a
    //         href="#"
    //         className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-800 hover:text-gray-100"
    //       >
    //         Features
    //       </a>
    //       <a
    //         href="#"
    //         className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-800 hover:text-gray-100"
    //       >
    //         Pricing
    //       </a>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
