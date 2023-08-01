
// Import Swiper React components
import { RiSoundModuleFill } from 'react-icons/ri';
import { BsFillClockFill } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './fifthSec.css';
import course from '../../../assets/work-net.jpg';

// import required modules
import { Scrollbar } from 'swiper/modules';

const FifthSec = () => {
    return (
        <div className='first-sec py-20'>
                <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Popular Courses</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

      A wide variety of courses to choose from.</p>
    </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper px-20"
            >
                
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={course} />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
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
                                        <RiSoundModuleFill className='me-1' />
                                        <h3>10 Modules</h3>
                                    </div>
                                    <div className="flex justify-center  items-center">
                                        <BsFillClockFill className='me-1' />
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
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default FifthSec;