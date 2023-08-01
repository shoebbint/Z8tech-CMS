import { BsFillClockFill } from "react-icons/bs";
import { RiSoundModuleFill } from "react-icons/ri";
import Navbar from "../Shared/Header/Navbar/Navbar";


const AllCourses = () => {
    return (
        <div>
      <div className="first-sec ">
        <Navbar></Navbar>
        <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

          <div className="text-sm breadcrumbs text-center ">
            <h1 className="text-2xl my-5">All courses</h1>
            <ul>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  Home
                </a>
              </li>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  Documents
                </a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Add Document
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-4/6 mx-auto -mt-32 ">
        <div data-aos="fade-down" className="rounded-lg h-64 overflow-hidden shadow-lg">
          <img alt="content" className="object-cover object-center  h-80 w-full" src="https://img.freepik.com/free-vector/group-students-watching-online-webinar_74855-5514.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=sph" />
        </div>
      </div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Our courses</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4 px-10">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="p-4 shadow-lg ">
                                <div className="h-full flex flex-col items-center text-center">

                                    <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                                    <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Mathematics</h2></div>
                                    <div className="w-full">
                                        <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                        <h3 className="text-gray-500 mb-3">$55</h3>
                                        <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div className="flex justify-between  items-center px-2 my-2">
                                            <div className="flex justify-center  items-center">
                                                <RiSoundModuleFill className="me-1" />
                                                <h3>10 Modules</h3>
                                            </div>
                                            <div className="flex justify-center  items-center">
                                                <BsFillClockFill className="me-1" />
                                                <h3> 6 Hours</h3>
                                            </div>
                                        </div>


                                        <span className="inline-flex my-3">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                        <div>
                                            <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllCourses;