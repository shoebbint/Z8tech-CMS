import review from "../../../assets/review.png"

// Import Swiper React components
import {
    Swiper, SwiperSlide
} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SeventhSec.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const SeventhSec = () => {
    return (
        <div className="first-sec py-12">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 my-auto px-20 items-center">

                <div>
                    <img src={review} alt="" />
                </div>

                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper px-10"
                    >
                        <SwiperSlide className=" p-10 bg-transparent">
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide
                        >
                        <SwiperSlide className=" p-10 bg-transparent"
                        >
                            <div className="my-auto    ">
                                <div className="h-full text-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </SwiperSlide  >

                    </Swiper>

                </div>
            </section>
        </div>
    );
};
export default SeventhSec;