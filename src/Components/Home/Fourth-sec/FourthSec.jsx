
import { Link } from "react-router-dom";
import about from "../../../assets/about.png"
const FourthSec = () => {
    return (
        <div >
            <section className="text-gray-600 body-font px-10">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded w-screen" alt="hero" src={about} />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-2xl ">WHO WE ARE</h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What We Offer
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <div className="flex  rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <img src="https://cdn-icons-png.flaticon.com/512/4737/4737471.png" alt="" />
                            </div>
                            <div className="flex-grow">


                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Industry Expert Instructor</h2>
                                <p className="leading-relaxed text-base">Online learning has become increasingly popular in recent years, offering a flexible and convenient way for learning.</p>

                            </div>
                        </div>
                        <div className="flex  rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                          <img src="https://cdn-icons-png.flaticon.com/512/6427/6427307.png" alt="" />
                            </div>
                            <div className="flex-grow">


                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Up-to-Date Course Content</h2>
                                <p className="leading-relaxed text-base">Our platform also features a collaborative learning environment, where you can connect with fellow learners.</p>

                            </div>
                        </div>
                        <div className="flex  rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <img src="https://cdn-icons-png.flaticon.com/512/2170/2170765.png" alt="" />
                            </div>
                            <div className="flex-grow">


                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Biggest Student Community</h2>
                                <p className="leading-relaxed text-base">Our courses are designed by industry experts and delivered through interactive online modules with a great community.</p>

                            </div>
                        </div>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                <Link to="/about">        <button className="py-5 px-10 btn btn-accent bg-red-500 hover:bg-red-400 border-0 text-white ">Know More </button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FourthSec;