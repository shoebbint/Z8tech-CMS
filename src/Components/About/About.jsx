// Import the required dependencies and styles
import Navbar from "../Shared/Header/Navbar/Navbar";
import "./About.css";
import image from "../../assets/about2.jpg";

// Main About component
const About = () => {
  return (
    <div>
      <div className="first-sec ">
        <Navbar></Navbar>
        <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

          <div className="text-sm breadcrumbs text-center ">
            <h1 className="text-2xl my-5">Faq</h1>
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
          <img alt="content" className="object-cover object-center  h-80 w-full" src={image} />
        </div>
      </div>
      <div className="px-36">
        {/* Section 1: Intro */}

        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/src/assets/Coaching1-min.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/src/assets/Coaching2-min.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/src/assets/Coaching3-min.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/src/assets/Coaching4-min.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/src/assets/Coaching5-min.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/src/assets/Coaching6-min.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Our History */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-center text-4xl text-black font-medium mb-10">
              Our History
            </h1>
            <p className="text-center mb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              aperiam molestiae beatae <br /> nisi corporis alias magnam
              blanditiis accusamus? Minus voluptate perspiciatis libero <br />
              consequuntur accusantium ut, sit voluptatem dolorem aspernatur nemo?
            </p>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Raclette Blueberry Nextious Level
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Ennui Snackwave Thundercats
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Selvage Poke Waistcoat Godard
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Upgrade Your Skills */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded w-[720px] h-[500px]"
                alt="hero"
                src="/src/assets/Coaching7-min.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Upgrade Your Skills
                <br className="hidden lg:inline-block" />
                Today For Upgrading <br /> Your Life.
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed <br /> tacos poke beard tote bag. Heirloom
                echo park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Find your courses &#8594;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Team */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Nadim Shahariar.jpeg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p className="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Akramul Hoque.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Henry Letham
                    </h2>
                    <p className="text-gray-500">CTO</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Hidyat Ullah.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Oskar Blinde
                    </h2>
                    <p className="text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/soyeb Bin Taher.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      John Doe
                    </h2>
                    <p className="text-gray-500">DevOps</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Mohammad Ifthekhar.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Martin Eden
                    </h2>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Misbah Uddin.jpg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Boris Kitua
                    </h2>
                    <p className="text-gray-500">UX Researcher</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Nadim Shahariar.jpeg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Atticus Finch
                    </h2>
                    <p className="text-gray-500">QA Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Nadim Shahariar.jpeg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Alper Kamu
                    </h2>
                    <p className="text-gray-500">System</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="/src/assets/Nadim Shahariar.jpeg"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Rodrigo Monchi
                    </h2>
                    <p className="text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Quality Course Instructor And Support */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-black text-4xl text-center font-medium mb-5">
              Quality Course <br /> Instructor And Support
            </h1>
            <p className="text-center mb-12">
              CHOOSE FROM 5,000 ONLINE VIDEO COURSES WITH NEW ADDITIONS
            </p>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 card-container">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-48 w-full object-cover object-center"
                    src="/src/assets/Courses.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Courses
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <button className="inline-flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg">
                      Popular Courses &#8594;
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 card-container">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-48 w-full object-cover object-center"
                    src="/src/assets/Instructor.svg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Expert Instructor
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">
                      Explore Instructor &#8594;
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 card-container">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-48 w-full object-cover object-center"
                    src="/src/assets/Support.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      24/7 Online Support
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg">
                      Support Center &#8594;
                    </button>
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

export default About;
