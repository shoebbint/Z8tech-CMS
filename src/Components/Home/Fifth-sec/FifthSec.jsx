
// Import Swiper React components
import { RiSoundModuleFill } from 'react-icons/ri';
import { BsFillClockFill } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './fifthSec.css';


// import required modules
import { Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';

const FifthSec = () => {
    return (
        <div className='first-sec py-20'>
                <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">Popular Courses</h1>
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
                className="mySwiper "
            >
                
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901791.jpg?w=996&t=st=1690889374~exp=1690889974~hmac=a69f1843c77cca34da9a2ca2ee6248c34f0350c8ad306abd8fae1ae7ddf6d67f" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/colleagues-working-together-conference-room_158595-5236.jpg?w=996&t=st=1690889171~exp=1690889771~hmac=c024331773f3f237b41e3fb45228bcea3b79bb366fa766e8563924426bdb0c2c" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Java</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/giving-advice-group-young-people-casual-clothes-working-modern-office_146671-16496.jpg?w=996&t=st=1690889206~exp=1690889806~hmac=0b9ab73a5ceb2217a184ce93b6e9afafab084918d6b86badbef7533f135d4c07" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Nextjs</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
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
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/group-young-people-casual-clothes-working-modern-office_146671-16433.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/pensive-man-classroom-with-computers_23-2147663678.jpg?size=626&ext=jpg&uid=R90121247&ga=GA1.2.1279309487.1687067718&semt=ais" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent mx-4'>
                    <div className="p-4 shadow-lg ">
                        <div className="h-full flex flex-col items-center text-center">
            
                            <img alt="team" className="relative  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://img.freepik.com/free-photo/colleagues-working-together-conference-room_158595-5235.jpg?w=996&t=st=1690889327~exp=1690889927~hmac=e0cac5d47d95f01f44a4bfa631b4ec80293531fe7831f6a744668b1c0d9d2fa4" />
                            <div className="absolute top-05 left-0 badge p-3  z-50 badge-secondary"><h2>Web Design</h2></div>
                            <div className="w-full">
                                <h2 className="title-font font-bold text-lg text-gray-900">PHP Beginners - Become a PHP Master</h2>
                                <h3 className="text-gray-500 mb-3">$55</h3>
                                <h3 className="text-gray-500 mb-3">By Iftekhar alam akib</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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
                                    <Link className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                                <div>
                                    <Link className="text-indigo-500 inline-flex items-center mt-3">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
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