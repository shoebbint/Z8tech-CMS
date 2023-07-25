import Navbar from "../Shared/Header/Navbar/Navbar";
import image from "../../assets/stdnt.jpg"
import { AiFillLike } from 'react-icons/ai';
import { FaComments } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';



const Forum = () => {
    return (
        <div>
            <div className="first-sec ">
                <Navbar></Navbar>
                <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

                    <div className="text-sm breadcrumbs text-center ">
                        <h1 className="text-2xl my-5">Forum</h1>
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
            <div className="-mt-52  ">
                <section className="text-gray-600 body-font bg-transparent ">
                    <div className="container px-5 py-24 mx-auto flex flex-col ">
                        <div className="lg:w-4/6 mx-auto ">
                            <div className="rounded-lg h-64 overflow-hidden shadow-lg">
                                <img alt="content" className="object-cover object-center h-full w-full" src={image} />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-2/3 sm:pr-8 sm:py-8  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2  w-full">
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                                <div className="flex-grow">
                                                    <h2 className="text-gray-900 title-font font-bold">How to buy course from Z8-tech</h2>
                                                    <p className="text-gray-500">To buy course please contact with us </p>
                                                    <div className="pt-5 flex justify-between">
                                                        <div className="badge badge-ghost p-3">By <span className="font-bold mx-2">Md ifteakher alam akib</span> </div>
                                                        <p>Instructor</p>
                                                        <p>24th July 2023</p>
                                                    </div>
                                                    <div className="flex  justify-end pt-3 me-0">
                                                        <p className="flex justify-center items-center me-5"><AiFillLike className="me-1"/>30</p>
                                                        <p className="flex justify-center items-center me-5"> <GrView className="me-1" /> 233</p>
                                                        <p className="flex justify-center items-center me-5"><FaComments className="me-1"/>22</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2  w-full">
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                                <div className="flex-grow">
                                                    <h2 className="text-gray-900 title-font font-bold">How to buy course from Z8-tech</h2>
                                                    <p className="text-gray-500">To buy course please contact with us </p>
                                                    <div className="pt-5 flex justify-between">
                                                        <div className="badge badge-ghost p-3">By <span className="font-bold mx-2">Md ifteakher alam akib</span> </div>
                                                        <p>Instructor</p>
                                                        <p>24th July 2023</p>
                                                    </div>
                                                    <div className="flex  justify-end pt-3 me-0">
                                                        <p className="flex justify-center items-center me-5"><AiFillLike className="me-1"/>30</p>
                                                        <p className="flex justify-center items-center me-5"> <GrView className="me-1" /> 233</p>
                                                        <p className="flex justify-center items-center me-5"><FaComments className="me-1"/>22</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2  w-full">
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                                <div className="flex-grow">
                                                    <h2 className="text-gray-900 title-font font-bold">How to buy course from Z8-tech</h2>
                                                    <p className="text-gray-500">To buy course please contact with us </p>
                                                    <div className="pt-5 flex justify-between">
                                                        <div className="badge badge-ghost p-3">By <span className="font-bold mx-2">Md ifteakher alam akib</span> </div>
                                                        <p>Instructor</p>
                                                        <p>24th July 2023</p>
                                                    </div>
                                                    <div className="flex  justify-end pt-3 me-0">
                                                        <p className="flex justify-center items-center me-5"><AiFillLike className="me-1"/>30</p>
                                                        <p className="flex justify-center items-center me-5"> <GrView className="me-1" /> 233</p>
                                                        <p className="flex justify-center items-center me-5"><FaComments className="me-1"/>22</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8  sm:border-l border-gray-200 sm:border-t-0 border-t  ">
                                    <div className="flex w-full md:justify-start justify-center items-end">
                                        <div className="relative">
                                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Search here</label>
                                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>

                                    </div>
                                    <h1 className="text-start text-xl font-bold">Categories</h1>
                                    <div className="p-2  w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium">Authentic Cliche Forage</span>
                                        </div>
                                    </div>
                                    <div className="p-2  w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium">Authentic Cliche Forage</span>
                                        </div>
                                    </div>
                                    <div className="p-2  w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium">Authentic Cliche Forage</span>
                                        </div>
                                    </div>
                                    <div className="p-2  w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium">Authentic Cliche Forage</span>
                                        </div>
                                    </div>
                                    <div className="p-2  w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span className="title-font font-medium">Authentic Cliche Forage</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Forum;